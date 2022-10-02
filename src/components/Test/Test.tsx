import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as histotyAactions } from '../../features/historyReducer';
import { HistoryObj } from '../../types/HistoryObj';
import { VocabularyObj } from '../../types/VocabularyObj';

type Props = {
  vocabulary: VocabularyObj[],
};

export const Test: React.FC<Props> = ({ vocabulary }) => {
  const copyVocabulary = [...vocabulary];
  const testLength = 10;
  const numberOfOptions = 4;

  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [lastTest, setLastTest] = useState(false);

  const testForHistory: HistoryObj[] = useMemo(() => [], []);

  const dispatch = useDispatch();
  const add = (test: HistoryObj[]) => dispatch(histotyAactions.add(test));

  const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number);
  };

  const getWordIndexes = (number: number) => {
    const indexes: number[] = [];

    while (indexes.length < number) {
      const index = getRandomNumber(copyVocabulary.length);

      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }

    return indexes;
  };

  const getOptions = (objIndex: number) => {
    const correctTranslation = copyVocabulary[objIndex].translation.join(', ');
    const options: string[] = [correctTranslation];

    while (options.length < numberOfOptions) {
      const index = getRandomNumber(copyVocabulary.length);
      const word = copyVocabulary[index].translation.join(', ');

      if (index !== objIndex && !options.includes(word)) {
        options.push(word);
      }
    }

    return options;
  };

  const getWordsForTest = () => {
    const wordIndexes = getWordIndexes(testLength);

    const arrOfWords = wordIndexes.map((index) => {
      const obj = copyVocabulary[index];
      const options = getOptions(index);

      const preparedObj = {
        ...obj,
        options: [...options].sort(() => 0.5 - Math.random()),
      };

      return preparedObj;
    });

    return arrOfWords;
  };

  const wordsForTest = useMemo(getWordsForTest, []);

  const handleTestClick = (currentObj: VocabularyObj, choosedTranslation: string) => {
    const nextIndex = currentTestIndex + 1;
    const testObj: HistoryObj = {
      word: currentObj.word,
      translation: currentObj.translation,
      choosedTranslation,
    };

    testForHistory.push(testObj);

    if (currentObj.translation.join(', ') === choosedTranslation) {
      setResult(prevResult => prevResult + 1);
    }

    if (nextIndex < testLength) {
      setCurrentTestIndex(nextIndex);
    } else {
      setLastTest(true);
      add(testForHistory);
    }
  };

  return (
    <div className="page__content test">

      {!lastTest ? (
        <>
          <div className="test__word">
            <div className="test__word-number">
              {`Слово: ${currentTestIndex + 1} з ${testLength}`}
            </div>

            <div className="test__word-text">
              {wordsForTest[currentTestIndex].word}
            </div>
          </div>

          <div className="test__translation">
            {wordsForTest[currentTestIndex].options.map((optionTranslation) => {
              return (
                <button
                  key={optionTranslation}
                  type="button"
                  className="test__translation-item"
                  onClick={() => handleTestClick(
                    wordsForTest[currentTestIndex],
                    optionTranslation,
                  )}
                >
                  {optionTranslation}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div className="test__result">
          {result === 10 ? (
            <div className="test__result test__result--excellent">
              <div>&#127881;&#127881;&#127881;</div>
              {`Вітаємо ${result * 10}% правильних відповідей`}
            </div>
          ) : (
            `Правильних відповідей: ${result * 10}%`
          )}
        </div>
      )}
    </div>
  );
};
