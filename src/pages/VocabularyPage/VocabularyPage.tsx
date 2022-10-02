import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions } from '../../features/vocabularyReducer';
import './VocabularyPage.scss';

export const VocabularyPage = () => {
  const vocabulary = useAppSelector(state => state.vocabulary);

  const dispatch = useDispatch();

  const deleteWord = (value: string) => (
    dispatch(actions.remove(value))
  );

  return (
    <section className="page">
      <div className="page__section">
        <h2 className="page__title">
          Словник
        </h2>

        {vocabulary.length
          ? (
            <div className="page__content vocabulary">
              <table className="vocabulary__table">
                <thead>
                  <tr className="vocabulary__item">
                    <th className="vocabulary__word vocabulary__word--title">
                      Нове слово
                    </th>

                    <th className="vocabulary__word vocabulary__word--title">
                      Переклад
                    </th>

                    <th className="vocabulary__word vocabulary__word--title">
                      X
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {vocabulary.map(({ word, translation }) => {
                    return (
                      <tr className="vocabulary__item" key={word}>
                        <td className="vocabulary__word">
                          {word}
                        </td>

                        <td className="vocabulary__word">
                          { translation.length >= 2
                            ? translation.join(', ')
                            : translation }
                        </td>

                        <td className="vocabulary__word">
                          <button
                            className="vocabulary__button"
                            type="button"
                            onClick={() => deleteWord(word)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )
          : (
            <div className="page__description">
              Словник поки що пустий, натисніть на кнопку&nbsp;
              <span className="page__description page__description--main">
                Додати слово
              </span>
              &nbsp;ліворуч, щоб почати наповнювати його
            </div>
          )}
      </div>
    </section>
  );
};
