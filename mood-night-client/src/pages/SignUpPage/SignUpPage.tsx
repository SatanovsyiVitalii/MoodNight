import { Container, Row, Col } from 'reactstrap';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <div css={(theme) => ({
      width: '100%',
      padding: '3rem',
      minHeight: '100vh',
      paddingTop: '3rem',
      background: theme.colors.background.gradient.primary,
    })}>
      <Container>
        <Row>
          <Col
            xs="12"
            md={{
              offset: 1,
              size: 10
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
                  <Col sm="12" lg="5" style={{
                    background: 'url(https://source.unsplash.com/Mv9hjnEUHR4/600x800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '14rem',
                  }}></Col>
                  <Col sm="12" lg="7">
                    <SignUpForm />
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

export default SignUpPage;