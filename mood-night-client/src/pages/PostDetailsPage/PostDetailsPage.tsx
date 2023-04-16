
import { useState, useEffect } from 'react';
import { Header, Page } from 'components';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useTheme } from '@emotion/react';
import { useFetchPostQuery } from 'store';
import PostHeaderInfo from './PostHeaderInfo';
import castle from '../../static/images/castle.jpg';

interface PostDetailsPagePropsInterface {
  postID: string | undefined;
}

function PostDetailsPage({ postID }: PostDetailsPagePropsInterface) {

  const { data, isFetching, isError } = useFetchPostQuery(postID);

  const [editorState, setEditorState] = useState<EditorState>();
  console.log('editorState', editorState);
  useEffect(() => {
    if (data && data.content) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.content))));
    }
  }, [data]);

  const theme = useTheme();
  return (
    <div css={{ width: '100%' }}>
      <Header css={{ background: theme.colors.background.gradient.light, }} />
      <Page>
        <div css={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div css={(theme) => ({
            width: '80%',
            minHeight: '100vh',
            background: theme.colors.background.gradient.light,
          })}>
            <div css={(theme) => ({
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Merriweather-Light'
            })}>
              <div css={{ width: '100%' }}>
                <PostHeaderInfo post={data} />
                <div css={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <span css={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    {data?.title}
                  </span>
                </div>
                <img
                  css={{
                    height: '30rem',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  src={castle}
                  alt='home'
                />
                <div css={{ padding: '1rem' }}>
                  <div>
                    <span css={{ whiteSpace: 'pre-line', fontSize: '1.5rem' }}>
                      {editorState && <Editor
                        editorState={editorState}
                        readOnly={true}
                        toolbarHidden={true}
                      />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default PostDetailsPage;