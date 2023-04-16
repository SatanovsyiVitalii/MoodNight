import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { FieldRenderProps } from 'react-final-form';

interface EditorAdapterProps extends FieldRenderProps<string, any> {
}

const toolbarOptions = {
  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign'],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
  blockType: {
    options: ['Normal', 'H1', 'H2', 'H3'],
  },
};

const EditorAdapter: React.FC<EditorAdapterProps> = ({
  input: { value, onBlur, onFocus, onChange, ...restInput },
  meta,
  css,
  ...rest
}) => {
  return (
    <div css={{
      ...css,
      border: '1px solid',
      '.rdw-editor-main': { minHeight: '20rem', maxHeight: '20rem', overflowY: 'auto', padding: '1rem', }
    }} {...rest}>
      <Editor
        onEditorStateChange={(editorState: EditorState) => onChange(JSON.stringify(convertToRaw(editorState.getCurrentContent())))}
        toolbar={toolbarOptions}
        {...restInput}
      />
    </div>
  );
};

export default EditorAdapter;