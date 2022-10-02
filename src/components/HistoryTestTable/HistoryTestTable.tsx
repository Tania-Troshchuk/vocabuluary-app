import classNames from 'classnames';
import React from 'react';
import { getID } from '../../features/getID';
import { HistoryObj } from '../../types/HistoryObj';

type Props = {
  key: number,
  number: number,
  test: HistoryObj[],
};

export const HistoryTestTable: React.FC<Props> = ({ test, number }) => {
  const result = test.reduce((score, obj) => {
    if (obj.translation.join(', ') === obj.choosedTranslation) {
      return score + 1;
    }

    return score;
  }, 0);

  return (
    <div className="page__content tests-history">
      <h3 className="tests-history__title">
        {`Результат перевірки № ${number + 1}: ${result * 10}%`}
      </h3>

      <table className="tests-history__table">
        <thead>
          <tr className="tests-history__item">
            <th className="tests-history__word tests-history__word--title">
              Нове слово
            </th>

            <th className="tests-history__word tests-history__word--title">
              Правильний переклад
            </th>

            <th className="tests-history__word tests-history__word--title">
              Обраний переклад
            </th>
          </tr>
        </thead>

        <tbody>
          {test.map(({ word, translation, choosedTranslation }) => {
            return (
              <tr
                key={getID()}
                className={classNames('tests-history__item', {
                  'tests-history__item--right': translation.join(', ') === choosedTranslation,
                })}
              >
                <td className="tests-history__word">
                  {word}
                </td>

                <td className="tests-history__word">
                  {translation.join(', ')}
                </td>

                <td className="tests-history__word">
                  {choosedTranslation}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
