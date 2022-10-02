import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Test } from '../../components/Test/Test';
import './TestPage.scss';

export const TestPage = () => {
  const vocabulary = useSelector((state: RootState) => state.vocabulary);

  return (
    <section className="page">
      <div className="page__section">
        <h2 className="page__title">
          Перевірка
        </h2>

        {vocabulary.length >= 10 ? (
          <Test vocabulary={vocabulary} />
        ) : (
          <div className="page__description">
            Для проходження тесту в словнику має бути щонайменше 10 слів, натисніть на кнопку&nbsp;
            <span className="page__description page__description--main">
              Додати слово
            </span>
            &nbsp;ліворуч, щоб додати нові слова
          </div>
        )}
      </div>
    </section>
  );
};
