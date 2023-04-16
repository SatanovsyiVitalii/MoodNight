import { Container, Row, Col } from 'reactstrap';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <div css={(theme) => ({
      width: '100%',
      minHeight: '100vh',
      paddingTop: '3rem',
      padding: '3rem',
      background: theme.colors.background.gradient.primary,
    })}>
      <Container>
        <Row>
          <Col
            xs="12"
            md={{
              offset: 2,
              size: 8
            }}
          >
            <div css={(theme) => ({
              width: '100%',
              background: theme.colors.background.gradient.light,
              borderRadius: '0.35rem',
              overflow: 'hidden',
            })}>
              <Container>
                <Row>
                  <Col sm="12" lg="6" style={{
                    background: 'url(https://source.unsplash.com/K4mSJ7kc0As/600x800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '14rem'
                  }}></Col>
                  <Col sm="12" lg="6">
                    <SignInForm />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default SignInPage;