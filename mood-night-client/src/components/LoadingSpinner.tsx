import React from 'react';
import { GoSync } from 'react-icons/go';

interface LoadingSpinnerPropsInterface {
  isLoading: boolean;
  children: React.ReactNode;
}

function LoadingSpinner({ children, isLoading }: LoadingSpinnerPropsInterface) {

  if (isLoading) {
    return <GoSync />
  }

  return <div>
    <div>
      {children}
    </div>
  </div>
}

export default LoadingSpinner;