import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpUserMutation } from 'store';
import { Form, Field } from 'react-final-form';
import { InputAdapter } from 'components/common/Form/adapters';
import { FormRow, FormFooter } from 'components/common/Form';
import { Button, Col, ErrorMessage, Row } from 'components';

import { PATHS } from 'routes/constants';

interface SignUpFormValuesInterface {
  email: string;
  password: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const [signUpUser, { data: signedUpUser, error, isLoading }] = useSignUpUserMutation();

  const onSubmit = ({ email, password }: SignUpFormValuesInterface) => {
    signUpUser({
      email,
      password,
    });
  }

  useEffect(() => {
    if (signedUpUser) {
      navigate(PATHS.ACCOUNT_EDITOR);
    }
  }, [signedUpUser, navigate]);

  return (
    <div css={{ width: '100%', padding: '3rem' }}>
      <div css={{ display: 'flex', justifyContent: 'center' }}>
        <h1 css={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Create an Account!</h1>
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormRow>
              <Field
                placeholder='Email Address'
                name='email'
                component={InputAdapter}
              />
            </FormRow>
            <FormRow>
              <Row>
                <Col sm="12" lg="6" css={{
                  '@media (max-width: 767px)': {
                    marginBottom: '1rem',
                  },
                }}>
                  <Field
                    placeholder='Password'
                    name='password'
                    component={InputAdapter}
                  />
                </Col>
                <Col sm="12" lg="6">
                  <Field
                    placeholder='Repeat Password'
                    name='password'
                    component={InputAdapter}
                  />
                </Col>
              </Row>
            </FormRow>
            <ErrorMessage error={error} />
            <FormFooter
              text='Sign Up'
              disabled={isLoading}
            />
          </form>
        )}
      />
      <hr />
      <div css={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          css={{ fontSize: '80%' }}
          color='link'
          onClick={() => navigate(PATHS.SIGNIN)}
        >
          Already have an account? Login!
        </Button>
      </div>
    </div>
  );

}