export const humanReadable = () => {
    return `<!DOCTYPE>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>MAT-8197 Draft based on 0.0.000</title>
<style type="text/css">
    body {
        color: rgb(0,0,0);
        background-color: rgb(255, 255, 255);
        font-family: Verdana, Tahoma, sans-serif;
        font-size: 11px;
        overflow-y: auto;
    }
    h1 {
        font-size: 12pt;
        font-weight: bold;
    }

    h2 {
        font-size: 11pt;
        font-weight: bold;
    }

    h3 {
        font-size: 10pt;
        font-weight: bold;
    }

    h4 {
        font-size: 8pt;
        font-weight: bold;
    }

    tr {
        background-color: #ccc;
    }

    td {
        padding: 0.1cm 0.2cm;
        vertical-align: top;
    }

    a {
        /*color: rgb(0, 0, 255);
      background-color: rgb(255,255,255);*/
    }

    table {
        line-height: 10pt;
        width: 80%;
        font-size: 11px;
    }

    /*div {
    width: 80%;
}*/

    .list-unstyled {
        list-style-type: none;
    }

    .list-unstyled li {
        padding-top: 5px;
    }

    .list-header {
        font-size: 12px;
        color: rgb(0, 0, 238);
    }

    .list-header:hover {
        text-decoration: underline;
    }

    .code {
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
        color: black;
        font-size: 12px;
    }

    .p-l-10 {
        padding-left: 10px;
    }

    .section {
        font-size: 10pt;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-right: 0.5em;
        font-weight: 700;
    }

    .cql-keyword-new {
        color: rgb(0, 0, 255);
        font-weight: 700;
    }

    .cql-class,
    .cql-object {
        color: rgb(25, 127, 157);
    }

    .cql_keyword {
        color: rgb(127, 0, 85);
        font-weight: 700;
    }

    .cql_function {
        color: rgb(127, 0, 85);
        font-weight: 700;
    }

    .cql_attribute {
        color: rgb(127, 0, 85);
        font-weight: 700;
    }

    .cql_string {
        color: rgb(42, 0, 255);
    }

    .cql_identifier .cql_function {
        color: rgb(60, 76, 114);
    }

    hr.style13 {
        height: 10px;
        border: 0;
        box-shadow: 0 10px 10px -10px #8c8b8b inset;
    }

    .treeview:hover input~label:before,
    .treeview.hover input~label:before {
        opacity: 1.0;
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        -ms-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }

    .treeview ul {
        -webkit-transition-duration: 1s;
        -moz-transition-duration: 1s;
        -ms-transition-duration: 1s;
        -o-transition-duration: 1s;
        transition-duration: 1s;
        -webkit-transition-timing-function: ease;
        -moz-transition-timing-function: ease;
        -ms-transition-timing-function: ease;
        -o-transition-timing-function: ease;
        transition-timing-function: ease;
        list-style: none;
        padding-left: 1em;
    }

    .treeview ul li span {
        -webkit-transition-property: color;
        -moz-transition-property: color;
        -ms-transition-property: color;
        -o-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 1s;
        -moz-transition-duration: 1s;
        -ms-transition-duration: 1s;
        -o-transition-duration: 1s;
        transition-duration: 1s;

    }

    .treeview input {
        display: none;
    }

    .treeview input[type=checkbox]:checked~ul {
        display: none;
    }

    .treeview input[type=checkbox]~ul {
        margin-right: 20%;
        opacity: 1;
    }

    .treeview input~label {
        cursor: pointer;
    }

    .treeview input~label:before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        margin-left: -1em;
        margin-top: 0.25em;
        border-width: 4px;
        border-style: solid;
        border-top-color: transparent;
        border-right-color: rgb(0, 0, 238);
        border-bottom-color: rgb(0, 0, 238);
        border-left-color: transparent;
        opacity: 0.0;
        -webkit-transition-property: opacity;
        -moz-transition-property: opacity;
        -ms-transition-property: opacity;
        -o-transition-property: opacity;
        transition-property: opacity;
        -webkit-transition-duration: 1s;
        -moz-transition-duration: 1s;
        -ms-transition-duration: 1s;
        -o-transition-duration: 1s;
        transition-duration: 1s;
    }

    .treeview input:checked~label:before {
        margin-left: -0.8em;
        border-width: 5px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: rgb(0, 0, 238);
    }

    .h1center {
        font-size: 12pt;
        font-weight: bold;
        text-align: center;
        width: 80%;
    }

    .header_table {
        border: 1pt inset rgb(0, 0, 0);
    }

    .narr_table {
        width: 100%;
    }

    .narr_tr {
        background-color: rgb(225, 225, 225);
    }

    pre {
        /* Use horizontal scroller if needed; for Firefox 2, not needed in Firefox 3 */
        white-space: pre-wrap;
        /* css-3 */
        white-space: -moz-pre-wrap !important;
        /* Mozilla, since 1999 */
        white-space: -pre-wrap;
        /* Opera 4-6 */
        white-space: -o-pre-wrap;
        /* Opera 7 */
        word-wrap: break-word;
        /* Internet Explorer 5.5+ */
        font-family: Verdana, Tahoma, sans-serif;
        font-size: 11px;
        text-align: left;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
    }

    .narr_th {
        background-color: rgb(201, 201, 201);
    }

    .td_label {
        font-weight: bold;
        color: white;
    }

    .hll {
        background-color: #ffffcc
    }

    .c {
        color: #408080;
        font-style: italic
    }

    /* Comment */
    .err {
        border: 1px solid #FF0000
    }

    /* Error */
    .k {
        color: #008000;
        font-weight: bold
    }

    /* Keyword */
    .o {
        color: #666666
    }

    /* Operator */
    .cm {
        color: #408080;
        font-style: italic
    }

    /* Comment.Multiline */
    .cp {
        color: #BC7A00
    }

    /* Comment.Preproc */
    .c1 {
        color: #408080;
        font-style: italic
    }

    /* Comment.Single */
    .cs {
        color: #408080;
        font-style: italic
    }

    /* Comment.Special */
    .gd {
        color: #A00000
    }

    /* Generic.Deleted */
    .ge {
        font-style: italic
    }

    /* Generic.Emph */
    .gr {
        color: #FF0000
    }

    /* Generic.Error */
    .gh {
        color: #000080;
        font-weight: bold
    }

    /* Generic.Heading */
    .gi {
        color: #00A000
    }

    /* Generic.Inserted */
    .go {
        color: #888888
    }

    /* Generic.Output */
    .gp {
        color: #000080;
        font-weight: bold
    }

    /* Generic.Prompt */
    .gs {
        font-weight: bold
    }

    /* Generic.Strong */
    .gu {
        color: #800080;
        font-weight: bold
    }

    /* Generic.Subheading */
    .gt {
        color: #0044DD
    }

    /* Generic.Traceback */
    .kc {
        color: #008000;
        font-weight: bold
    }

    /* Keyword.Constant */
    .kd {
        color: #008000;
        font-weight: bold
    }

    /* Keyword.Declaration */
    .kn {
        color: #008000;
        font-weight: bold
    }

    /* Keyword.Namespace */
    .kp {
        color: #008000
    }

    /* Keyword.Pseudo */
    .kr {
        color: #008000;
        font-weight: bold
    }

    /* Keyword.Reserved */
    .kt {
        color: #B00040
    }

    /* Keyword.Type */
    .m {
        color: #666666
    }

    /* Literal.Number */
    .s {
        color: #BA2121
    }

    /* Literal.String */
    .na {
        color: #7D9029
    }

    /* Name.Attribute */
    .nb {
        color: #008000
    }

    /* Name.Builtin */
    .nc {
        color: #0000FF;
        font-weight: bold
    }

    /* Name.Class */
    .no {
        color: #880000
    }

    /* Name.Constant */
    .nd {
        color: #AA22FF
    }

    /* Name.Decorator */
    .ni {
        color: #999999;
        font-weight: bold
    }

    /* Name.Entity */
    .ne {
        color: #D2413A;
        font-weight: bold
    }

    /* Name.Exception */
    .nf {
        color: #0000FF
    }

    /* Name.Function */
    .nl {
        color: #A0A000
    }

    /* Name.Label */
    .nn {
        color: #0000FF;
        font-weight: bold
    }

    /* Name.Namespace */
    .nt {
        color: #008000;
        font-weight: bold
    }

    /* Name.Tag */
    .nv {
        color: #19177C
    }

    /* Name.Variable */
    .ow {
        color: #AA22FF;
        font-weight: bold
    }

    /* Operator.Word */
    .w {
        color: #bbbbbb
    }

    /* Text.Whitespace */
    .mf {
        color: #666666
    }

    /* Literal.Number.Float */
    .mh {
        color: #666666
    }

    /* Literal.Number.Hex */
    .mi {
        color: #666666
    }

    /* Literal.Number.Integer */
    .mo {
        color: #666666
    }

    /* Literal.Number.Oct */
    .sb {
        color: #BA2121
    }

    /* Literal.String.Backtick */
    .sc {
        color: #BA2121
    }

    /* Literal.String.Char */
    .sd {
        color: #BA2121;
        font-style: italic
    }

    /* Literal.String.Doc */
    .s2 {
        color: #BA2121
    }

    /* Literal.String.Double */
    .se {
        color: #BB6622;
        font-weight: bold
    }

    /* Literal.String.Escape */
    .sh {
        color: #BA2121
    }

    /* Literal.String.Heredoc */
    .si {
        color: #BB6688;
        font-weight: bold
    }

    /* Literal.String.Interpol */
    .sx {
        color: #008000
    }

    /* Literal.String.Other */
    .sr {
        color: #BB6688
    }

    /* Literal.String.Regex */
    .s1 {
        color: #BA2121
    }

    /* Literal.String.Single */
    .ss {
        color: #19177C
    }

    /* Literal.String.Symbol */
    .bp {
        color: #008000
    }

    /* Name.Builtin.Pseudo */
    .vc {
        color: #19177C
    }

    /* Name.Variable.Class */
    .vg {
        color: #19177C
    }

    /* Name.Variable.Global */
    .vi {
        color: #19177C
    }

    /* Name.Variable.Instance */
    .il {
    color: #666666
    }

    /* Literal.Number.Integer.Long */

    #nn-text {
        text-align: center;
        text-align: center;
        color: lightgrey;
        font-size: 40px;
    }

    .cql-definition-body {
        width: 950px;
        display: block;
        word-wrap: break-word;
    }

    li {
        padding-left: 15px;
    }
    .row-header {
        background-color:#656565;
        width:20%;
        padding: 0.1cm 0.2cm;
        text-align: left;
    }
</style>    </head>
    <body>
<table class="header_table" role="presentation">
    <tbody>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">eCQM Title</span></th>
            <td style="width:80%" colspan="3"><h1 style="font-size:10px">MAT-8197</h1></td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">CMS ID</span></th>
            <td style="width:30%"></td>

            <th scope="row" class="row-header"><span class="td_label">eCQM Version Number</span></th>
            <td style="width:30%">Draft based on 0.0.000</td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">CBE Number</span></th>
            <td style="width:30%">Not Applicable</td>

            <th scope="row" class="row-header"><span class="td_label">GUID</span></th>
            <td style="width:30%">686f1df2-bf8c-41c8-aa57-8674bbe2058b</td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Measurement Period</span></th>
            <td style="width:80%" colspan="3">December 31, 2023 through December 31, 2024</td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Measure Steward</span></th>
            <td style="width:80%" colspan="3">3Cloud Solutions</td>
        </tr>
                <tr>
                    <th scope="row" class="row-header"><span class="td_label">Measure Developer</span></th>
                    <td style="width:80%" colspan="3">Able Health
</td>
                </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Endorsed By</span></th>
            <td style="width:80%" colspan="3">None</td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Description</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre>test</pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Copyright</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Disclaimer</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Measure Scoring</span></th>
            <td style="width:80%" colspan="3">Cohort</td>
        </tr>
                <tr>
                    <th scope="row" class="row-header"><span class="td_label">Measure Type</span></th>
                    <td style="width:80%" colspan="3">Intermediate Outcome</td>
                </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Stratification</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                        <pre>None</pre>
                </div>
            </td>
        </tr>
        
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Risk Adjustment</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Rate Aggregation</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Rationale</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Clinical Recommendation Statement</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Improvement Notation</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre>Increased score indicates improvement</pre>
                </div>
            </td>
        </tr>
            <tr>
                <th scope="row" class="row-header"><span class="td_label">Reference</span></th>
                <td style="width:80%" colspan="3"></td>
            </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Definition</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Guidance</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Transmission Format</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Initial Population</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre>None</pre>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Supplemental Data Elements</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<h2>
    <a name="toc">Table of Contents</a>
</h2>
<ul style="padding-left: 50px;">
    <li><a href="#d1e405">Population Criteria</a></li>
    <li><a href="#d1e649">Definitions</a></li>
    <li><a href="#d1e650">Functions</a></li>
    <li><a href="#d1e555">Terminology</a></li>
    <li><a href="#d1e647">Data Criteria (QDM Data Elements)</a></li>

    <li><a href="#d1e767">Supplemental Data Elements</a></li>
    <li><a href="#d1e879">Risk Adjustment Variables</a></li>
</ul><div style="float:left; background:teal; height:3px; width:80%"></div>
<pre><br/></pre><h3><a name="d1e405" href="#toc">Population Criteria</a></h3>
<div>
	            <ul style="list-style:none;">
<li class="list-unstyled" style="list-style:none;padding-left:0;">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="67991a1726b5965dd9fe0d59" />
        <label for="67991a1726b5965dd9fe0d59" class="list-header"><b>Population Criteria 1</b></label>
            <ul>
                <!-- Score Unit -->
<li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="7348c6f1-4cef-429a-bd73-c114afcf1b42"/>
                <label for="7348c6f1-4cef-429a-bd73-c114afcf1b42" class="list-header"><strong>Initial Population</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body">  &quot;Qualifying Encounters&quot;</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="None"/>
                <label for="None" class="list-header"><strong>Stratification</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body cql-class">None</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li>            </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0;">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="67991a2826b5965dd9fe0d5a" />
        <label for="67991a2826b5965dd9fe0d5a" class="list-header"><b>Population Criteria 2</b></label>
            <ul>
                <!-- Score Unit -->
<li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="75ff7ecd-bcc8-482f-9de7-7b2430214e7e"/>
                <label for="75ff7ecd-bcc8-482f-9de7-7b2430214e7e" class="list-header"><strong>Initial Population</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Acute Inpatient&quot;] AcuteInpatient
    where AcuteInpatient.lengthOfStay &gt; 10 days</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="None"/>
                <label for="None" class="list-header"><strong>Stratification</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body cql-class">None</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li>            </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0;">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="67991a2f26b5965dd9fe0d5b" />
        <label for="67991a2f26b5965dd9fe0d5b" class="list-header"><b>Population Criteria 3</b></label>
            <ul>
                <!-- Score Unit -->
<li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="a9be9c9c-1262-454f-911f-d52645b00135"/>
                <label for="a9be9c9c-1262-454f-911f-d52645b00135" class="list-header"><strong>Initial Population</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Active Bleeding&quot;] ActiveBleeding
    where ActiveBleeding.relevantPeriod overlaps day of &quot;Measurement Period&quot;</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="None"/>
                <label for="None" class="list-header"><strong>Stratification</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body cql-class">None</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li>            </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0;">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="67991a3c26b5965dd9fe0d5c" />
        <label for="67991a3c26b5965dd9fe0d5c" class="list-header"><b>Population Criteria 4</b></label>
            <ul>
                <!-- Score Unit -->
<li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="80cc8b86-0b6c-467f-930c-d439b6f53be3"/>
                <label for="80cc8b86-0b6c-467f-930c-d439b6f53be3" class="list-header"><strong>Initial Population</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Encounter Inpatient&quot;] EncounterInpatient
    where EncounterInpatient.lengthOfStay &gt; 15 days</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="None"/>
                <label for="None" class="list-header"><strong>Stratification</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body cql-class">None</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li>            </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0;">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="67991a4426b5965dd9fe0d5d" />
        <label for="67991a4426b5965dd9fe0d5d" class="list-header"><b>Population Criteria 5</b></label>
            <ul>
                <!-- Score Unit -->
<li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="5698cc2b-f4be-4fd7-a00c-8b5d7b49ae5c"/>
                <label for="5698cc2b-f4be-4fd7-a00c-8b5d7b49ae5c" class="list-header"><strong>Initial Population</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Emergency Department Visit&quot;] EmergencyDepartmentVisit
    where EmergencyDepartmentVisit.lengthOfStay &gt; 15 days</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li><li class="list-unstyled" style="list-style:none;padding-left:0px;">
    <div class="treeview hover p-l-10">
        <ul class="list-unstyled">
            <li class="list-unstyled"><input type="checkbox" id="None"/>
                <label for="None" class="list-header"><strong>Stratification</strong></label>
                <ul class="code">
                    <li class="list-unstyled">
                        <div class="treeview hover p-l-10">
                            <ul>
                                <li style="padding-left: 0px;">
                                    <div>
                                        <pre class="cql-definition-body cql-class">None</pre>
                                    </div>
                                </li>
                            </ul>&nbsp;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</li>            </ul>
    </div>
</li>            </ul>
</div><h3><a name="d1e649" href="#toc">Definitions</a></h3>
<div>
    <ul style="list-style:none;padding-left: 10px;">
        <li class="list-unstyled" style="list-style:none;">
            <div>
                <ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Denominator" />
            <label for="Denominator" class="list-header"><strong>Denominator</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Acute Inpatient&quot;] AcuteInpatient
    where AcuteInpatient.lengthOfStay &gt; 10 days</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Denominator 2" />
            <label for="Denominator 2" class="list-header"><strong>Denominator 2</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Encounter Inpatient&quot;] EncounterInpatient
    where EncounterInpatient.lengthOfStay &gt; 15 days</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Initial Population" />
            <label for="Initial Population" class="list-header"><strong>Initial Population</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  &quot;Qualifying Encounters&quot;</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Numerator" />
            <label for="Numerator" class="list-header"><strong>Numerator</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Active Bleeding&quot;] ActiveBleeding
    where ActiveBleeding.relevantPeriod overlaps day of &quot;Measurement Period&quot;</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Numerator 2" />
            <label for="Numerator 2" class="list-header"><strong>Numerator 2</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Encounter, Performed&quot;: &quot;Emergency Department Visit&quot;] EmergencyDepartmentVisit
    where EmergencyDepartmentVisit.lengthOfStay &gt; 15 days</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="Qualifying Encounters" />
            <label for="Qualifying Encounters" class="list-header"><strong>Qualifying Encounters</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  ( [&quot;Encounter, Performed&quot;: &quot;Encounter Inpatient&quot;]
    union [&quot;Encounter, Performed&quot;: &quot;Emergency Department Visit&quot;]
    union [&quot;Encounter, Performed&quot;: &quot;Acute Inpatient&quot;]
    union [&quot;Encounter, Performed&quot;: &quot;Active Bleeding&quot;]
    union [&quot;Encounter, Performed&quot;: &quot;Observation Services&quot;] ) Encounter
    where Encounter.relevantPeriod ends during &quot;Measurement Period&quot;</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="SDE Ethnicity" />
            <label for="SDE Ethnicity" class="list-header"><strong>SDE Ethnicity</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Patient Characteristic Ethnicity&quot;: &quot;Ethnicity&quot;]</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul><ul class="list-unstyled" style="list-style:none;padding-left:0;">
    <li class="list-unstyled">
        <div class="treeview hover p-l-10">
            <input type="checkbox" id="SDE Payer" />
            <label for="SDE Payer" class="list-header"><strong>SDE Payer</strong></label>
            <ul class="code" style="margin-right: 20%; opacity: 1;">
                <li class="list-unstyled">
                    <div>
                        <ul style="padding-left: 0px;">
                            <li style="padding-left: 0px;" class="list-unstyled">
                                <div>
                                    <pre class="cql-definition-body">  [&quot;Patient Characteristic Payer&quot;: &quot;Payer Type&quot;]</pre>
                                </div>
                            </li>
                        </ul>&nbsp;
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul>            </div>
        </li>
    </ul>
</div><h3><a name="d1e650" href="#toc">Functions</a></h3>
<div>
    <ul style="list-style:none;padding-left: 10px;">
        <li class="list-unstyled" style="list-style:none;">
            <div>
                                    None
            </div>
        </li>
    </ul>
</div><h3><a name="d1e555" href="#toc">Terminology</a></h3>
<div>
            <ul style="padding-left: 50px;">
                <li style="width:80%">valueset &quot;Active Bleeding&quot; (2.16.840.1.113762.1.4.1206.28)</li>
                <li style="width:80%">valueset &quot;Acute Inpatient&quot; (2.16.840.1.113762.1.4.1182.118)</li>
                <li style="width:80%">valueset &quot;Emergency Department Visit&quot; (2.16.840.1.113883.3.117.1.7.1.292)</li>
                <li style="width:80%">valueset &quot;Encounter Inpatient&quot; (2.16.840.1.113883.3.666.5.307)</li>
                <li style="width:80%">valueset &quot;Ethnicity&quot; (2.16.840.1.114222.4.11.837)</li>
                <li style="width:80%">valueset &quot;Observation Services&quot; (2.16.840.1.113762.1.4.1111.143)</li>
                <li style="width:80%">valueset &quot;Payer Type&quot; (2.16.840.1.114222.4.11.3591)</li>
        </ul>
</div><h3><a name="d1e647" href="#toc">Data Criteria (QDM Data Elements)</a></h3>

<div>
            <ul style="padding-left: 50px;">
                <li style="width:80%">&quot;Encounter, Performed: Active Bleeding&quot; using &quot;Active Bleeding (2.16.840.1.113762.1.4.1206.28)&quot;</li>
                <li style="width:80%">&quot;Encounter, Performed: Acute Inpatient&quot; using &quot;Acute Inpatient (2.16.840.1.113762.1.4.1182.118)&quot;</li>
                <li style="width:80%">&quot;Encounter, Performed: Emergency Department Visit&quot; using &quot;Emergency Department Visit (2.16.840.1.113883.3.117.1.7.1.292)&quot;</li>
                <li style="width:80%">&quot;Encounter, Performed: Encounter Inpatient&quot; using &quot;Encounter Inpatient (2.16.840.1.113883.3.666.5.307)&quot;</li>
                <li style="width:80%">&quot;Encounter, Performed: Observation Services&quot; using &quot;Observation Services (2.16.840.1.113762.1.4.1111.143)&quot;</li>
                <li style="width:80%">&quot;Patient Characteristic Ethnicity: Ethnicity&quot; using &quot;Ethnicity (2.16.840.1.114222.4.11.837)&quot;</li>
                <li style="width:80%">&quot;Patient Characteristic Payer: Payer Type&quot; using &quot;Payer Type (2.16.840.1.114222.4.11.3591)&quot;</li>
        </ul>
</div><h3><a name="d1e767" href="#toc">Supplemental Data Elements</a></h3>
<ul style="list-style:none;padding-left: 25px;">
	<li class="list-unstyled">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="ef8c749a-23d1-4731-86dc-907983029bb5" />
        <label for="ef8c749a-23d1-4731-86dc-907983029bb5" class="list-header"><strong>SDE Ethnicity</strong></label>
        <ul class="code" style="margin-right: 20%; opacity: 1;">
            <li class="list-unstyled">
                <div>
                    <ul style="padding-left: 0px;">
                        <li style="padding-left: 0px;" class="list-unstyled">
                            <div>
                                <pre class="cql-definition-body">  [&quot;Patient Characteristic Ethnicity&quot;: &quot;Ethnicity&quot;]</pre>
                            </div>
                        </li>
                    </ul>&nbsp;
                </div>
            </li>
        </ul>
    </div>
</li></ul><h3><a name="d1e879" href="#toc">Risk Adjustment Variables</a></h3>
<ul style="list-style:none;padding-left: 25px;">
	<li class="list-unstyled">
    <div class="treeview hover p-l-10">
        <input type="checkbox" id="15d20fe6-b081-4561-b0b6-17b41a737e02" />
        <label for="15d20fe6-b081-4561-b0b6-17b41a737e02" class="list-header"><strong>SDE Payer</strong></label>
        <ul class="code" style="margin-right: 20%; opacity: 1;">
            <li class="list-unstyled">
                <div>
                    <ul style="padding-left: 0px;">
                        <li style="padding-left: 0px;" class="list-unstyled">
                            <div>
                                <pre class="cql-definition-body">[[&quot;Patient Characteristic Payer&quot;: &quot;Payer Type&quot;]]</pre>
                            </div>
                        </li>
                    </ul>&nbsp;
                </div>
            </li>
        </ul>
    </div>
</li></ul><div style="float:left; background:teal; height:3px; width:80%"></div>
<pre><br/></pre><table class="header_table" role="presentation">
    <tbody>
        <tr>
            <th scope="row" class="row-header"><span class="td_label">Measure Set</span></th>
            <td style="width:80%" colspan="3">
                <div style="width:660px;">
                    <pre></pre>
                </div>
            </td>
        </tr>
    </tbody>
</table>

    </body>
</html>
`;
};
