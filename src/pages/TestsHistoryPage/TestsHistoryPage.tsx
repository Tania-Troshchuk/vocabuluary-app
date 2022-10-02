import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { HistoryTestTable } from '../../components/HistoryTestTable/HistoryTestTable';
import { getID } from '../../features/getID';
import './TestsHistoryPage.scss';

export const TestsHistoryPage = () => {
  const testsHistory = useAppSelector(state => state.history);

  return (
    <section className="page">
      <div className="page__section">
        <h2 className="page__title">
          Історія перевірок
        </h2>

        {testsHistory.length
          ? (
            testsHistory.map((test, index) => (
              <HistoryTestTable
                key={getID()}
                number={index}
                test={test}
              />
            ))
          ) : (
            <div className="page__description">
              Ви ще не перевіряли свої знання, натисніть на кнопку&nbsp;
              <span className="page__description page__description--main">
                Перевірка
              </span>
              &nbsp;ліворуч, щоб спробувати свої сили
            </div>
          )}
      </div>
    </section>
  );
};
