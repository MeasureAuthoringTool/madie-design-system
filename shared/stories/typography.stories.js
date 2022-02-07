import typeVars from '../styles/qppds/settings/variables/_type.scss';

export default {
  title: 'Typography',
};

export const Font = () => `
<div class="qpp-u-margin--8">
  ${[48, 40, 32, 24, 20, 18, 16, 14, 12]
    .map(
      (size) => `
    <p class="qpp-p1 qpp-u-font-weight--normal qpp-u-font-size--${size}">Rubik (normal ${size})</p>
    <p class="qpp-p1 qpp-u-font-weight--medium qpp-u-font-size--${size}">Rubik (medium ${size})</p>
  `
    )
    .join('')}
</div>
`;

export const Heading = () => `
  <div style="max-width: 460px;">
    <h1 class="qpp-h1">H1</h1>
    <h1 class="qpp-h1">Quick fox jumps nightly above wizard</h1>
    <br />
    <h2 class="qpp-h2">H2</h2>
    <h2 class="qpp-h2">Fix problems quickly with galvanized jets</h2>
    <br />
    <h3 class="qpp-h3">H3</h3>
    <h3 class="qpp-h3">Grumpy wizards make a toxic brew for the jovial queen</h3>
    <br />
    <h4 class="qpp-h4">H4</h4>
    <h4 class="qpp-h4">The five boxing wizards jump quickly</h4>
    <br />
    <h5 class="qpp-h5">H5</h5>
    <h5 class="qpp-h5">Fix problems quickly with galvanized jets</h5>
    <br />
    <h6 class="qpp-h6">H6</h6>
    <h6 class="qpp-h6">Fix problems quickly with galvanized jets</h6>
  </div>
`;

export const Paragraph = () => `
  <div style="max-width:65ch;">
    <p class="qpp-p">
      The universe is hilarious! Like, Venus is <em>900 degrees</em>. I could
      tell you it melts lead. But that's not as fun as saying, 'You can cook a
      pizza on the windowsill in nine seconds.' And next time my fans eat pizza,
      they're thinking of Venus!
    </p>
    <p class="qpp-p">
      The urge to miniaturize electronics did not exist before the space
      program. I mean our grandparents had radios that was furniture in the
      living room. Nobody at the time was saying, 'Gee, I want to carry
      <i>that</i> in my pocket.' Which is a non-thought.
    </p>
    <p class="qpp-p">
      You have people who believe they are scientifically literate but, in fact,
      are not. And I don't mind if you're not scientifically literate, but just
      admit that to yourself, so that you'll know, and perhaps you can take a
      first step to try to <strong>eradicate that</strong>.
    </p>
  </div>
`;

export const ParagraphSmallText = () => `
  <div style="max-width:65ch;">
    <p class="qpp-p2">
      The universe is hilarious! Like, Venus is <em>900 degrees</em>. I could
      tell you it melts lead. But that's not as fun as saying, 'You can cook a
      pizza on the windowsill in nine seconds.' And next time my fans eat pizza,
      they're thinking of Venus!
    </p>
    <p class="qpp-p2">
      The urge to miniaturize electronics did not exist before the space
      program. I mean our grandparents had radios that was furniture in the
      living room. Nobody at the time was saying, 'Gee, I want to carry
      <i>that</i> in my pocket.' Which is a non-thought.
    </p>
    <p class="qpp-p2">
      You have people who believe they are scientifically literate but, in fact,
      are not. And I don't mind if you're not scientifically literate, but just
      admit that to yourself, so that you'll know, and perhaps you can take a
      first step to try to <strong>eradicate that</strong>.
    </p>
  </div>
`;

export const InputLabel = () => `
  <div class="qpp-u-padding--16">
    <label class="qpp-label" for="example-default">Default Label</label>
    <input class="qpp-c-text-input" type="text" id="example-default" name="single_example" placeholder="Example placeholder">
  </div>
  <div class="qpp-u-padding--16 qpp-u-fill--blue-70">
    <label class="qpp-label qpp-u-color--white" for="example-white">White Label</label>
    <input class="qpp-c-text-input" type="text" id="example-white" name="single_example" placeholder="Example placeholder">
  </div>
`;

export const NonFormLabels = () => `
  <div style="max-width:65ch;">
    <span class="qpp-l1">
      (L1) Show mangled quartz flip vibe exactly
    </span>
    <hr />
    <span class="qpp-l2">
      (L2) The wizard quickly jinxed the gnomes before they vaporized
    </span>
  </div>
`;

export const QppProse = () => `
  <div class="qpp-prose">
    <h1>.qpp-prose</h1>
    <p>Applies default type styles to descendants<p>
    <p class="p2">previously named 'qppds'</p>
    <p><span class="l1">L1</span></p>
    <p><span class="l2">L1</span></p>
    <h2>H2</h2>
    <h2>Fix problems quickly with galvanized jets</h2>
    <br />
    <h3>H3</h3>
    <h3>Grumpy wizards make a toxic brew for the jovial queen</h3>
    <br />
    <h4>H4</h4>
    <h4>The five boxing wizards jump quickly</h4>
    <br />
    <h5>H5</h5>
    <h5>Fix problems quickly with galvanized jets</h5>
    <br />
    <h6>H6</h6>
    <h6>Fix problems quickly with galvanized jets</h6>
  </div>
`;

export const JavascriptVariables = () => `
  <pre>${JSON.stringify(typeVars, null, 2)}</pre>
`;
