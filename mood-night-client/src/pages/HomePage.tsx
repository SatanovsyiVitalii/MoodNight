import { useFetchPostsQuery } from 'store';
import home from '../static/images/home.jpg';
import { Page, Header } from 'components';

import { PostCard } from 'components';

function HomePage() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  console.log('posts', posts);
  return (
    <div css={{ width: '100%' }}>
      <Header />
      <Page css={{ padding: '0' }}>
        <div css={{ width: '100%' }}>
          <div css={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <img
              css={{
                width: '100%',
                height: '45rem',
              }}
              src={home}
              alt='home'
            />
            <span css={(theme) => ({
              position: 'absolute',
              top: '50%',
              left: '50%',
              color: theme.colors.text.light,
              fontSize: '10rem',
              fontWeight: 'bold',
              transform: 'translate(-50%, -50%)'
            })}>MoodNight</span>
          </div>
          <div css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 25rem)',
            justifyContent: 'space-between',
            gridGap: '5rem',
            padding: '2rem',
          }}>{posts?.map((post) => (<PostCard post={post} />))}</div>
        </div>
      </Page>
    </div>
  );
}

export default HomePage;