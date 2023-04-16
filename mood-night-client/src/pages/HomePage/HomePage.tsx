import { useFetchPostsQuery } from 'store';
import { Page, Header, Container, Row, Col, Logo } from 'components';
import EventPreview from './EventPreview';

import { PostCard } from 'components';

function HomePage() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  console.log('posts', posts);
  return (
    <div css={{ width: '100%' }}>
      <Header />
      <div css={(theme) => ({
        padding: '6em 3em',
        minHeight: '100vh',
        background: theme.colors.background.gradient.light,
      })}>
        <Container>
          <Row>
            <Col sm="12" lg="4">
              <div css={(theme) => ({
                height: '100%',
                color: theme.colors.text.dark,
                display: 'flex',
                flexDirection: 'column',
                // textTransform: 'uppercase',
              })}>
                <Logo />
                <h2 css={{ fontWeight: 'bold' }}>MoodNight</h2>
                <ul css={{
                  listStyle: 'none',
                  padding: '0',
                }}>
                  <li>📖Літературні читання Вінниця</li>
                  <li>✍Креативне письмо</li>
                  <li>💜 Шукай мене у блокноті</li>
                  <li>🔶️Вікно, у якому завжди горить світло</li>
                </ul>
                <hr css={(theme) => ({ borderColor: theme.colors.border.darkest })} />
                <p css={{ fontWeight: 'bold' }}>{'Події які скоро відбудяться'.toUpperCase()}</p>
                <EventPreview />
              </div>
            </Col>
            <Col sm="12" lg="8">
              <div css={{ height: '100%' }}>
                {posts?.map((post) => (<PostCard key={post.id} post={post} />))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

{/* <Header />
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
      </Page> */}