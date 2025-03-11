import { Circles } from 'react-loader-spinner';
import React from 'react';
import scss from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={scss.loader}>
      <Circles
        visible={true}
        height="80"
        width="80"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="circles-wrapper"
        color="#fc842d"
      />
    </div>
  );
};

