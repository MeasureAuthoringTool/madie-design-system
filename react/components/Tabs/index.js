import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MuiTabs from '@material-ui/core/Tabs'
import TabPanel from './TabPanel'
import LinkTab from './Tab'

const isTabPanel = (child) => child?.type === TabPanel

const getPanelChildren = (children) => {
  return React.Children.toArray(children).filter(isTabPanel)
};

const Tabs = ({ children, onChange, selected, defaultSelectedId, ariaLabel }) => {
  const [value, setValue] = useState(defaultSelectedId || selected)
  
  useEffect(() => {
    if (selected) {
      setValue(selected)
    }
  }, [selected])

  if (!children) return null

  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(tabList[newValue]?.id, event)
    }
    if (setValue) {
      setValue(tabList[newValue]?.id)
    }
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (isTabPanel(child)) {
        return React.cloneElement(child, { index, value: tabIndex })
      }
      return child
    })
  }  

  const panels = getPanelChildren(children)
  
  const tabList = panels.map(
    (panel) => {
      const { id, tab, tabHref, disabled } = panel?.props || {}
      return { tab, tabHref, disabled, id }
    },
  )

  const foundIndex = tabList.findIndex(({ id }) => id === value)
  
  const tabIndex = foundIndex >= 0 ? foundIndex : 0

  return (
    <>
      <div className="qpp-c-tabs qpp-c-tabs--mui">
        <MuiTabs value={tabIndex} onChange={handleChange} aria-label={ariaLabel}>
          {tabList.map(({ tab, tabHref, disabled, id }, index) => (
            <LinkTab
              index={index}
              key={`link-tab-${tab}`}
              label={tab}
              href={tabHref}
              disabled={disabled}
              id={`qpp-c-tabs__item--${id}`}
            />
          ))}
        </MuiTabs>
      </div>
      {renderChildren()}
    </>
  )
}

Tabs.propTypes = {
  ariaLabel: PropTypes.string,
  selected: PropTypes.string,
  defaultSelectedId: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ])
}

Tabs.defaultProps = {
  ariaLabel: 'qpp tabs',
  selected: null,
  defaultSelectedId: null,
  onChange: null,
  children: null,
}

export default Tabs
