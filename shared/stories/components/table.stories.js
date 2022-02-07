import storyWrapper from '../storyWrapper';

export default {
  title: 'Components/Table',
};

export const PrimaryTable = () =>
  storyWrapper(
    `
    <table class="qpp-c-table qpp-u-width--100">
      <caption>Chart Title</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
          <th>Category 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>
  `,
    'qppds',
    'width:770px;'
  );

export const SecondaryTable = () =>
  storyWrapper(
    `
    <table class="qpp-c-table qpp-c-table--secondary qpp-u-width--100">
      <caption>Chart Title</caption>
      <tbody>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
          <th>Category 4</th>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>
  `,
    'qppds',
    'width:770px;'
  );

export const MultilineCells = () =>
  storyWrapper(
    `
    <table class="qpp-c-table qpp-u-width--100">
      <caption>Chart Title</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
          <th>Category 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Some Information on Two Lines</td>
          <td>Some Information on Two Lines</td>
          <td>Some Information on Two Lines</td>
          <td>Some Information on Two Lines</td>
        </tr>
        <tr>
          <td>Another Example of Information on Three Lines</td>
          <td>Another Example of Information on Three Lines</td>
          <td>Another Example of Information on Three Lines</td>
          <td>Another Example of Information on Three Lines</td>
        </tr>
      </tbody>
    </table>
  `,
    'qppds',
    'width:770px;'
  );

export const WithoutHeaders = () =>
  storyWrapper(
    `
      <table class="qpp-c-table qpp-u-width--100">
        <caption>Primary Table Without Headers</caption>
        <tbody>
          <tr>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
          </tr>
          <tr>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
          </tr>
          <tr>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <table class="qpp-c-table qpp-c-table--secondary qpp-u-width--100">
        <caption>Secondary Table Without Headers</caption>
        <tbody>
          <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>

  `,
    'qppds',
    'width:770px;'
  );

export const TwoColumnExamples = () =>
  storyWrapper(
    `
    <table class="qpp-c-table qpp-u-width--100">
      <caption>Imbalanced Columns Example</caption>
      <thead>
        <tr>
          <th>Advanced APM</th>
          <th>Overview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bundled Payments for Care Improvement (BPCI) Advanced</td>
          <td>The Bundled Payments for Care Improvement (BPCI) initiative is a model of care, which links payments for the multiple services beneficiaries receive during a clinical episode of care.</td>
        </tr>
        <tr>
          <td>Comprehensive Primary Care Plus (CPC+)</td>
          <td>Comprehensive Primary Care Plus (CPC+) is a national advanced primary care medical home model that aims to strengthen primary care through regionally-based multi-payer payment reform and care delivery transformation.</td>
        </tr>
        <tr>
          <td>Medicare Accountable Care Organization (ACO) Track 1+ Model</td>
          <td>The Medicare ACO Track 1+ is a time-limited model for Track 1 Medicare Shared Savings Program (Shared Savings Program) ACOs. The Shared Savings Program is a voluntary program that encourages groups of doctors, hospitals, and other health care providers to come together as an ACO to provide coordinated, high-quality care to their Medicare patients. Track 1+ Model ACOs assume limited downside risk (less than Track 2 or Track 3).</td>
        </tr>
      </tbody>
    </table>
    <hr />
      <table class="qpp-c-table qpp-u-width--100">
      <caption>Balanced Columns Example</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>
  `,
    'qppds',
    'width:770px;'
  );

export const ThreeColumnExamples = () =>
  storyWrapper(
    `
    <table class="qpp-c-table">
      <caption>Imbalanced Columns Example</caption>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Declaration of Independence</th>
          <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
          <td>1776</td>
        </tr>
        <tr>
          <th scope="row">Bill of Rights</th>
          <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
          <td>1791</td>
        </tr>
        <tr>
          <th scope="row">Declaration of Sentiments</th>
          <td>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>
          <td>1848</td>
        </tr>
        <tr>
          <th scope="row">Emancipation Proclamation</th>
          <td>An executive order granting freedom to slaves in designated southern states.</td>
          <td>1863</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <table class="qpp-c-table qpp-u-width--100">
      <caption>Balanced Columns Example</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>
  `,
    'qppds',
    'width:770px;'
  );

export const ScrollableExample = () =>
  storyWrapper(
    `
    <div class="qpp-c-table-container--scrollable" tabindex="0">
      <table class="qpp-c-table qpp-u-width--100">
        <caption>Scrollable table</caption>
        <col>
        <colgroup span="2"></colgroup>
        <colgroup span="2"></colgroup>
        <thead>
          <tr>
            <th rowspan="2">Federal Budget<br> Baseline Projections</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">2017</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">2018</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">2019</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">2020</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">2021</th>
            <th colspan="2" scope="colgroup" class="qpp-u-text-align--center">Hist. Avg.</th>
          </tr>
          <tr>
            <th scope="col" class="qpp-u-text-align--right qpp-u-padding-left--12">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
            <th scope="col" class="qpp-u-text-align--right">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
            <th scope="col" class="qpp-u-text-align--right">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
            <th scope="col" class="qpp-u-text-align--right">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
            <th scope="col" class="qpp-u-text-align--right">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
            <th scope="col" class="qpp-u-text-align--right">%GDP</th>
            <th scope="col" class="qpp-u-text-align--right">USD*</th>
          </tr>
        </thead>
        <tr>
          <th scope="row">Revenue</th>
          <td class="qpp-u-text-align--right">17.2%</td>
          <td class="qpp-u-text-align--right">3,316</td>
          <td class="qpp-u-text-align--right">16.4%</td>
          <td class="qpp-u-text-align--right">3,338</td>
          <td class="qpp-u-text-align--right">16.3%</td>
          <td class="qpp-u-text-align--right">3,490</td>
          <td class="qpp-u-text-align--right">16.7%</td>
          <td class="qpp-u-text-align--right">3,678</td>
          <td class="qpp-u-text-align--right">16.7%</td>
          <td class="qpp-u-text-align--right">3,827</td>
          <td class="qpp-u-text-align--right">17.4%</td>
          <td class="qpp-u-text-align--right">3,381</td>
        </tr>
        <tr>
          <th scope="row">Outlays</th>
          <td class="qpp-u-text-align--right">20.6%</td>
          <td class="qpp-u-text-align--right">3,982</td>
          <td class="qpp-u-text-align--right">20.2%</td>
          <td class="qpp-u-text-align--right">4,142</td>
          <td class="qpp-u-text-align--right">21.0%</td>
          <td class="qpp-u-text-align--right">4,470</td>
          <td class="qpp-u-text-align--right">21.3%</td>
          <td class="qpp-u-text-align--right">4,685</td>
          <td class="qpp-u-text-align--right">21.6%</td>
          <td class="qpp-u-text-align--right">4,949</td>
          <td class="qpp-u-text-align--right">20.3%</td>
          <td class="qpp-u-text-align--right">4,198</td>
        </tr>
        <tr>
          <th scope="row">Budget Deficit</th>
          <td class="qpp-u-text-align--right">-3.5%</td>
          <td class="qpp-u-text-align--right">-665</td>
          <td class="qpp-u-text-align--right">-3.8%</td>
          <td class="qpp-u-text-align--right">-804</td>
          <td class="qpp-u-text-align--right">-4.6%</td>
          <td class="qpp-u-text-align--right">-981</td>
          <td class="qpp-u-text-align--right">-4.6%</td>
          <td class="qpp-u-text-align--right">-1,008</td>
          <td class="qpp-u-text-align--right">-4.9%</td>
          <td class="qpp-u-text-align--right">-1,123</td>
          <td class="qpp-u-text-align--right">-2.9%</td>
          <td class="qpp-u-text-align--right">-483</td>
        </tr>
        <tr>
          <th scope="row">Debt Held by Public</th>
          <td class="qpp-u-text-align--right">76.0%</td>
          <td class="qpp-u-text-align--right">14,665</td>
          <td class="qpp-u-text-align--right">77.4%</td>
          <td class="qpp-u-text-align--right">15,688</td>
          <td class="qpp-u-text-align--right">79.2%</td>
          <td class="qpp-u-text-align--right">16,762</td>
          <td class="qpp-u-text-align--right">80.9%</td>
          <td class="qpp-u-text-align--right">17,872</td>
          <td class="qpp-u-text-align--right">83.1%</td>
          <td class="qpp-u-text-align--right">18,998</td>
          <td class="qpp-u-text-align--right">41.7%</td>
          <td class="qpp-u-text-align--right">8,065</td>
        </tr>
      </table>
    </div>
`,
    'qppds',
    'width:770px;'
  );

export const SizedToContent = () =>
  storyWrapper(
    `
    <table class="qpp-c-table">
      <caption>Short Content</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
          <th>Category 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <table class="qpp-c-table">
      <caption>Long Content</caption>
      <thead>
        <tr>
          <th>Category 1</th>
          <th>Category 2</th>
          <th>Category 3</th>
          <th>Category 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gumbo beet greens corn</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Celery quandong swiss chard chicory earthnut pea potato.</td>
          <td>Information</td>
        </tr>
        <tr>
          <td>Information</td>
          <td>Information</td>
          <td>Information</td>
          <td>Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard</td>
        </tr>
      </tbody>
    </table>
  `
  );

export const MobileStackedHeader = () =>
  storyWrapper(`
    <table class="qpp-c-table qpp-c-table--stacked">
      <caption>
        Stacked table<br>
        (when on a mobile-width screen)
      </caption>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="Document title" scope="row">Declaration of Independence</th>
          <td data-label="Description">Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
          <td data-label="Year">1776</td>
        </tr>
        <tr>
          <th data-label="Document title" scope="row">Bill of Rights</th>
          <td data-label="Description">The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
          <td data-label="Year">1791</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <table class="qpp-c-table qpp-c-table--stacked-header">
      <caption>
        Stacked table with row headers<br>
        (when on a mobile-width screen)
      </caption>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="Document title" scope="row">Declaration of Independence</th>
          <td data-label="Description">Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
          <td data-label="Year">1776</td>
        </tr>
        <tr>
          <th data-label="Document title" scope="row">Bill of Rights</th>
          <td data-label="Description">The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
          <td data-label="Year">1791</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <p class="qpp-u-font--monospace">
      Stacked table without title<br>
      (when on a mobile-width screen)
    </p>
    <table class="qpp-c-table qpp-c-table--stacked">
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="Document title" scope="row">Declaration of Independence</th>
          <td data-label="Description">Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
          <td data-label="Year">1776</td>
        </tr>
        <tr>
          <th data-label="Document title" scope="row">Bill of Rights</th>
          <td data-label="Description">The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
          <td data-label="Year">1791</td>
        </tr>
      </tbody>
    </table>
    `);

export const FrontEndContentExamples = () =>
  storyWrapper(
    `
<table class="qpp-c-table qpp-u-width--100">
<thead>
  <tr>
    <th>If you participate at this level...</th>
    <th>You can use this collection type set...</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Individual, Group, APM Entity (SSP ACO and non-SSP ACO)</td>
    <td>Option 1<ul class="no-overlap"><li>eCQM/MIPS CQM (3 measures),</li><li>CAHPS for MIPS and;</li><li>Administrative Claims (2 measures*).</li></ul></td>
  </tr>
  <tr>
    <td>APM Entity (SSP ACOs only)</td>
    <td>Option 2<ul class="no-overlap"><li>CMS Web Interface (10 measures),</li><li>CAHPS for MIPS and;</li><li>Administrative Claims (2 measures).</li></ul></td>
  </tr>
<tbody>
</table>
<br /><br />
<table class="qpp-c-table qpp-u-width--100">
<thead>
  <tr>
    <th>Level</th>
    <th>You will Receive this Special Status if...</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Clinician</td>
    <td>The MIPS eligible clinician is associated with a practice in a ZIP code designated as rural by the Federal Office of Rural Health Policy (FORHP) using the most recent FORHP Eligible ZIP code file available.</td>
  </tr>
  <tr>
    <td>Practice</td>
    <td>More than 75% of the clinicians billing under the practice’s TIN are in a ZIP code designated as rural using the most recent FORHP ZIP code file.</td>
  </tr>
  <tr>
    <td>Virtual Group</td>
    <td>More than 75% of the clinicians billing in the virtual group are in a ZIP code designated as rural using the most recent FORHP ZIP code file.</td>
  </tr>
<tbody>
</table>
`,
    'qppds',
    'max-width:770px;'
  );
