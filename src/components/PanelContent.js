import React from "react";
import CodeMirror from "@uiw/react-codemirror";


/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent = ({ code}) => {
  const [codeState, setCodeState] = React.useState('')

  React.useEffect(() => {
    setCodeState(code || '')
  }, [code])

  const onChange = React.useCallback((value) => {
    setCodeState(value);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      const storybookPreviewWrapper = document.getElementById('storybook-preview-iframe');
      if (storybookPreviewWrapper && storybookPreviewWrapper.contentDocument) {
        const storybookRoot = storybookPreviewWrapper.contentDocument.getElementById('storybook-root').firstChild;
        if (storybookRoot) {
          storybookRoot.innerHTML = codeState;
        }
      }
    }, 10);
  }, [codeState]);

    return (
      <CodeMirror
        basicSetup={{lineNumbers: true, completionKeymap: true, highlightActiveLineGutter: true, autocompletion: true}}
        value={codeState}
        height="100%"
        onChange={onChange}
      />
    )

}
