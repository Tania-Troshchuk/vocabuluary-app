import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions } from '../../features/vocabularyReducer';
import { VocabularyObj } from '../../types/VocabularyObj';
import './AddWordPage.scss';

export const AddWordPage = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [wasAddWord, setWasAddWord] = useState(false);
  const [isContained, setIsContained] = useState(false);

  const vocabulary = useAppSelector(state => state.vocabulary);

  const dispatch = useDispatch();
  const add = (object: VocabularyObj) => dispatch(actions.add(object));

  const handleWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleTranslation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTranslation(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const containedWord = vocabulary.find(obj => obj.word === word);

    if (containedWord && containedWord.translation.includes(translation)) {
      setIsContained(true);
    } else {
      add({
        word,
        translation: [translation],
      });

      setWord('');
      setTranslation('');
      setWasAddWord(true);
      setIsContained(false);

      setTimeout(() => {
        setWasAddWord(false);
      }, 500);
    }
  };

  return (
    <section className="page">
      <div className="page__section">
        <h2 className="page__title">
          Додати нове слово
        </h2>

        <div className="page__content add-word">
          <form
            onSubmit={handleSubmit}
            className="add-word__form"
          >
            <label
              htmlFor="field-en"
              className="add-word__field-title"
            >
              Нове слово:
              <input
                type="text"
                name="English word"
                id="field-en"
                className="add-word__field"
                value={word}
                placeholder="надрукуй слово"
                onChange={handleWord}
                required
              />
            </label>

            <label
              htmlFor="field-ua"
              className="add-word__field-title"
            >
              Переклад:
              <input
                type="text"
                name="Translation"
                id="field-ua"
                className="add-word__field"
                value={translation}
                placeholder="надрукуй переклад"
                onChange={handleTranslation}
                required
              />
            </label>

            <button
              type="submit"
              className="add-word__button"
            >
              Додати
            </button>
          </form>

          {wasAddWord && (
            <div className="add-word__message add-word__message--success">
              Слово успішно додано
            </div>
          )}

          {isContained && (
            <div className="add-word__message add-word__message--warning">
              Слово з таким перекладом вже міститься у словнику
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
