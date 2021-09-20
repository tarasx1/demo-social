import React from 'react';
import Preloader from '../common/Preloader/Preloader';

export const withSuspens = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
