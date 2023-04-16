import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Alert } from 'components';

interface ErrorMessagePropsInterface {
  error: FetchBaseQueryError | SerializedError | undefined;
}

interface CustomError {
  statusCode: number;
  message: string;
  error: string;
}

function ErrorMessage({ error }: ErrorMessagePropsInterface) {

  if (error !== undefined && 'data' in error) {

    const { data } = error;

    const errorObj = data as CustomError;

    return <Alert color='danger'>Status: {errorObj.statusCode}. Error type: {errorObj.error}. Message: {errorObj.message}.</Alert>;
  }

  return null;
}

export default ErrorMessage;