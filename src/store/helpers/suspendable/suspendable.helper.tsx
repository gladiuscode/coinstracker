import React, {createElement, Suspense} from 'react';
import Fallback from './fallback/fallback.suspendable';

const suspendable = <T,>(component: React.FC<T>, fallback = <Fallback />) => {
  return (props: T) => {
    const componentInit = createElement(component, props);
    return <Suspense fallback={fallback}>{componentInit}</Suspense>;
  };
};

export default suspendable;
