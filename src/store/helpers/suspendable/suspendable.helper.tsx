import React, {createElement, Suspense} from 'react';
import Fallback from './fallback/fallback.suspendable';

const suspendable = <T,>(component: React.FC<T>) => {
  return (props: T) => {
    const componentInit = createElement(component, props);
    return <Suspense fallback={<Fallback />}>{componentInit}</Suspense>;
  };
};

export default suspendable;
