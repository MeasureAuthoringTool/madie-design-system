import React, { useState, useEffect } from "react";
import { pie, arc } from "d3-shape";
import { select, event } from "d3-selection";
import PropTypes from "prop-types";

const WIDTH = 210;
const HEIGHT = 210;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2;
const GAP_VALUE = 2.5;

const ScoreChart = ({ performanceYear, chartData, linkCallback }) => {
    const [hasLegend, setHasLegend] = useState(false);
    const [titleMapping, setTitleMapping] = useState({
        quality: "Quality Measures",
        aci: "Advancing Care Info",
        pi: "Promoting Interoperability",
        ia: "Improvement Activities",
        cost: "Cost",
    });

    const { categories } = chartData;
    let legendToggler;
    let legend;

    const getAdvancingCareLabel = () => {
        if (performanceYear > 2017) {
            setTitleMapping({
                ...titleMapping,
                aci: "Promoting Interoperability",
            });
        }
    };

    const redirectToCategory = (link, categoryId) => {
        if (!link) {
            return;
        }

        // track explicitly chart legends
        if (window.utag) {
            window.utag.track("link", {
                ga_event_category: "SidebarNav",
                ga_event_action: `GoTo${categoryId}`,
                ga_event_label: categoryId,
            });
        }

        if (linkCallback) {
            linkCallback(link);
        } else {
            window.location.href = link;
        }
    };

    const draw = (chartData) => {
        const scorePie = pie().sort(null);

        // Removing invalid categories
        const categories = chartData.categories.filter(
            ({ maxContribution }) => !!maxContribution
        );

        // Calculating the sum of valid categories in order to calculate ratios
        const categorySum = categories
            .map(({ maxContribution }) => maxContribution)
            .reduce((sum, current) => sum + current);

        if (!categorySum) {
            return;
        }

        select(".score-chart").selectAll("*").remove();

        const svg = select(".score-chart")
            .attr("width", WIDTH)
            .attr("height", HEIGHT);

        const chartArc = arc()
            .innerRadius(RADIUS - 1.5)
            .outerRadius(RADIUS - 25);

        // Preparing the data structure with ratios: [ FILLED, EMPTY, TRANSPARENT, FILLED, EMPTY, ... ]
        let data;
        if (categories.length === 0) {
            data = [];
        } else if (categories.length === 1) {
            const { value, maxContribution } = categories[0];
            data = [value || 0, maxContribution - value];
        } else {
            data = categories
                .map(({ value, maxContribution }) => [
                    value || 0,
                    maxContribution - value,
                    GAP_VALUE * (categorySum / 100),
                ])
                .reduce((a, b) => a.concat(b), []);
        }

        svg.append("title").attr("id", "titleID").text("Your submission score");

        svg.append("desc")
            .attr("id", "descID")
            .text(`${chartData.finalScore} out of 100`);

        // Setting up the arcs
        let arcs = svg
            .append("g")
            .attr("class", "arcs")
            .attr("role", "presentation")
            .selectAll("g.arc")
            .data(scorePie(data))
            .enter()
            .append("g")
            .attr("class", (d, i) => {
                let role;
                if (i % 3 === 0) {
                    role = "filled";
                } else if (i % 3 === 1) {
                    role = "empty";
                } else {
                    role = "transparent";
                }
                return `arc ${categories[parseInt(i / 3)].name} ${role}`;
            })
            .attr("transform", `translate(${RADIUS}, ${RADIUS})`)
            // For accessibility, we add keyboard access to the filled slices
            .attr("tabindex", (d, i) => {
                let tabindex = -1;
                if (i % 3 === 0) {
                    tabindex = 0;
                }
                return tabindex;
            })
            // IE for for focusable svg elements
            .attr("focusable", (d, i) => {
                if (i % 3 === 0) {
                    return true;
                }
            })
            // For accessibility, we add keyboard access to the filled slices
            .on("keyup", (d, i) => {
                const code = event.keyCode || event.which;
                if (code === 13) {
                    const { name, link } = categories[parseInt(i / 3)];
                    redirectToCategory(link, name);
                }
            })
            // On click - go to category page
            .on("click", (d, i) => {
                const { name, link } = categories[parseInt(i / 3)];
                redirectToCategory(link, name);
            });

        // Add accessibility description
        arcs.append("desc").text((d, i) => {
            if (i % 3 === 0) {
                const { name, value, maxContribution } =
                    categories[parseInt(i / 3)];
                return `${titleMapping[name]} ${value} out of ${maxContribution}`;
            }
        });

        arcs.append("path")
            .attr("d", chartArc)
            // On mouse over - show category tooltip
            .on("mouseover", (d, i) => {
                const { name, value, maxContribution } =
                    categories[parseInt(i / 3)];
                select(".chart-tooltip")
                    .style("opacity", 1)
                    .text(`${titleMapping[name]} ${value}/${maxContribution}`);
            })
            // On mouse move - move category tooltip
            .on("mousemove", () => {
                select(".chart-tooltip")
                    .style("top", event.clientY - HEIGHT + 10 + "px")
                    .style("left", event.clientX + "px");
            })
            // On mouse out - hide category tooltip
            .on("mouseout", () => {
                select(".chart-tooltip").style("opacity", 0);
            });

        // Adding title and subtitle
        const text = svg
            .append("g")
            .attr("text-anchor", "middle")
            .attr("transform", `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

        // Adding title - X%
        text.append("text")
            .attr("y", 4)
            .attr("class", "chart-title")
            .text(chartData.finalScore);

        // Adding subtitle - OUT OF 100
        text.append("text")
            .attr("y", 24)
            .attr("class", "chart-subtitle")
            .text("OUT OF 100");
    };

    const toggleLegend = () => {
        setHasLegend(!hasLegend);
    };

    useEffect(() => {
        if (chartData?.finalScore) {
            draw(chartData);
            getAdvancingCareLabel();
        }
    }, [chartData?.finalScore]);

    if (hasLegend) {
        legendToggler = (
            <button className="open" type="button" aria-pressed="true">
                Hide Legend
                <svg
                    className="right-icon rotated"
                    aria-hidden="true"
                    focusable="false"
                >
                    <use xlinkHref="#chevron-down" />
                </svg>
            </button>
        );
        legend = categories.map(
            ({ name, value, maxContribution, link }, index) => {
                return (
                    <li key={name} className="legend-axis">
                        <button onClick={() => redirectToCategory(link, name)}>
                            <span className={`legend-axis-color ${name}`} />
                            &nbsp;
                            <span className="legend-axis-title">
                                {titleMapping[name]}
                            </span>
                            &nbsp;
                            <span className="legend-axis-value">{`${value}/${maxContribution}`}</span>
                        </button>
                    </li>
                );
            }
        );
    } else {
        legendToggler = (
            <button type="button" aria-pressed="false">
                Show Legend
                <svg
                    className="right-icon"
                    aria-hidden="true"
                    focusable="false"
                >
                    <use xlinkHref="#chevron-down" />
                </svg>
            </button>
        );
    }

    return (
        <div className="chart">
            <svg className="score-chart" focusable="false" />
            <div className="chart-tooltip off" />
            <div className="chart-legend-toggler" onClick={toggleLegend}>
                {legendToggler}
            </div>
            <ul className="chart-legend">{legend}</ul>
        </div>
    );
};

ScoreChart.propTypes = {
    chartData: PropTypes.object,
    linkCallback: PropTypes.func,
    performanceYear: PropTypes.number,
};

export default ScoreChart;
