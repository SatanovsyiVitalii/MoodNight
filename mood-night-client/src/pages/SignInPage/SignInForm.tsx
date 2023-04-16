import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInUserMutation } from 'store';
import { Form, Field } from 'react-final-form';
import { InputAdapter } from 'components/common/Form/adapters';
import { FormRow, FormFooter } from 'components/common/Form';
import { Button, ErrorMessage } from 'components';

import { PATHS } from 'routes/constants';

interface SignInFormValuesInterface {
  email: string;
  password: string;
}

export default function SignInForm() {
  const navigate = useNavigate();
  const [signInUser, { data: signedInUser, error }] = useSignInUserMutation();

  const onSubmit = ({ email, password }: SignInFormValuesInterface) => {
    signInUser({
      email,
      password,
    });
  }

  useEffect(() => {
    if (signedInUser) {
      navigate(PATHS.ACCOUNT_EDITOR);
    }
  }, [signedInUser, navigate]);

  return (
    <div css={{ width: '100%', padding: '3rem' }}>
      <div css={{ display: 'flex', justifyContent: 'center' }}>
        <h1 css={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Welcome back!</h1>
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormRow>
              <Field
                placeholder='Enter Email address'
                name='email'
                component={InputAdapter}
              />
            </FormRow>
            <FormRow>
              <Field
                placeholder='Password'
                name='password'
                component={InputAdapter}
              />
            </FormRow>
            <ErrorMessage error={error} />
            <FormFooter
              text='Sign In'
            />
          </form>
        )}
      />
      <hr />
      <div css={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          css={{ fontSize: '80%' }}
          color='link'
          onClick={() => navigate(PATHS.SIGNUP)}
        >
          Create an account
        </Button>
      </div>
    </div>
  );

}