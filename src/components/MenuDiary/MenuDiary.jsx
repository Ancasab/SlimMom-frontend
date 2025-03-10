import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TbArrowBack } from 'react-icons/tb';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import style from './MenuDiary.module.scss';

export const MenuDiary = memo(({ onClick }) => {
  return (
    <>
      <div className={style.modal}>
        <div className={style.list}>
          <button className={style.btn} onClick={onClick}>
            <TbArrowBack className={style.icon} />
          </button>
          <DiaryAddProductForm />
        </div>
      </div>
    </>
  );
});

MenuDiary.propTypes = {
  onClick: PropTypes.func.isRequired,
};
