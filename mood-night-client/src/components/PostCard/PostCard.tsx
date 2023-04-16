import { Button, Col, Container, Row } from 'components';
import { convertFromRaw } from 'draft-js';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'routes/constants';
import { Post } from 'store/apis/postsApi';

interface PostCardPropsInterface {
  post: Post;
}

function PostCard({ post }: PostCardPropsInterface) {
  const navigate = useNavigate();
  const content = useMemo(() => post.content ? convertFromRaw(JSON.parse(post.content)).getPlainText() : '', []);
  return (
    <article css={(theme) => ({
      border: `${theme.colors.border.dark} 1px solid`,
      background: theme.colors.background.solid.light,
      margin: '0 0 3em 0'
    })}>
      <header css={(theme) => ({
        borderBottom: `${theme.colors.border.dark} 1px solid`,
      })}>
        <Container>
          <Row>
            <Col sm="12" lg="9">
              <div css={(theme) => ({
                padding: '3.75em 3em 3.3em 3em',
                borderRight: `${theme.colors.border.dark} 1px solid`,
              })}>
                <h2 css={(theme) => ({ fontWeight: 'bold', color: theme.colors.text.darker })}>{post.title.toUpperCase()}</h2>
                <p css={(theme) => ({ color: theme.colors.text.dark })}>{post.description.length > 1000 ? `${post.description.slice(0, 1000)}...` : post.description}</p>
              </div>
            </Col>
            <Col sm="12" lg="3">
              <div css={{
                padding: '3.75em 1em 1.75em 1em',
              }}>
                <div css={{
                  fontSize: '0.7em',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  paddingRight: '0.3rem'
                }}>{post && format(new Date(post.created_at), 'dd MMMM yyyy', { locale: uk }).toUpperCase()}</div>

                <div css={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '0.5rem', }}>
                  <span css={{ fontSize: '0.7em', whiteSpace: 'nowrap' }}>{post.user.surname} {post.user.name}</span>
                  <img
                    css={{
                      height: '2.5rem',
                      width: '2.5rem',
                      borderRadius: '50%',
                      marginLeft: '0.5rem',
                    }}
                    src='/images/undraw_profile.svg'
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div css={{
        padding: '3em 3em 1em 3em',
        overflow: 'hidden'
      }}>
        <img
          css={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
          src='/images/pic03.jpg'
        />
        {content && <p css={{
          marginTop: '2rem',
        }}>
          {content.length > 1000 ? `${content.slice(0, 1000)}...` : content}
        </p>}
      </div>
      <footer css={{
        padding: '1em 3em 3.3em 3em',
      }}>
        <Button outline onClick={() => navigate(`${PATHS.POST_DETAILS}/${post.id}`)}>
          Continue Reading
        </Button>
      </footer>
    </article>
  );
}

export default PostCard;

{/* <div
      css={(theme) => ({
        height: '25rem',
        width: '25rem',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(coffee.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: `5px solid ${theme.colors.background.gradient.primary}`,
        color: theme.colors.background.gradient.primary,
        padding: '1rem',
        cursor: 'pointer',
        '&:hover': {
          border: `5px solid ${theme.colors.background.gradient.primary}`,
          boxShadow: `10px 5px 5px ${theme.colors.background.gradient.primary}`,

        }
      })}
      onClick={() => navigate(`${PATHS.POST_DETAILS}/${post.id}`)}
    >
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <div>
          <div>
            <span css={{ fontSize: '2rem' }}>{post.title}</span>
          </div>
        </div>
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>{post.user.name}</span>
            <span>{post.user.surname}</span>
          </div>
          <div>{post && moment(new Date(post.created_at)).format('MMMM Do YYYY hh:mm')}</div>
        </div>
      </div>
    </div> */}