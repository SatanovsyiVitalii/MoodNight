/** @jsx jsx */ import { jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { InputAdapter } from 'components/common/Form/adapters';
import { FormRow, FormFooter } from 'components/common/Form';
import { Page } from 'components';

import { setUser, useSignInUserMutation } from 'store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface SignInFormValuesInterface {
  email: string;
  password: string;
}

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInUser, { isLoading, isError, data }] = useSignInUserMutation();

  const onSubmit = ({ email, password }: SignInFormValuesInterface) => {
    signInUser({
      email,
      password,
    });
  }

  useEffect(() => {
    if (!isLoading && !isError && data) {
      dispatch(setUser(data));
      navigate('/protected');
    }
  }, [data, dispatch, isError, isLoading, navigate]);

  return (
    <div css={{
      height: 'calc(100vh - 3rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div css={{
        width: '50%',
        transform: 'translateY(-50%)',
        border: '1px solid deepskyblue',
        padding: '2rem',
        borderRadius: '50px',
      }}>
        <div css={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <h2>Sign In</h2>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormRow
                label='Email:'
              >
                <Field
                  name='email'
                  component={InputAdapter}
                />
              </FormRow>
              <FormRow
                label='Password:'
              >
                <Field
                  name='password'
                  component={InputAdapter}
                />
              </FormRow>
              <FormFooter
                text='Sign In'
              />
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default SignInPage;