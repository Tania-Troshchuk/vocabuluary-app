import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWordsForTest } from '../../features/testHelper';
import { actions as histotyAactions } from '../../features/historyReducer';
import { HistoryObj } from '../../types/HistoryObj';
import { VocabularyObj } from '../../types/VocabularyObj';
import { Result } from '../Result/Result';

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

  const wordsForTest = useMemo(
    () => getWordsForTest(copyVocabulary, testLength, numberOfOptions),
    [],
  );
  const testForHistory: HistoryObj[] = useMemo(() => [], []);

  const dispatch = useDispatch();
  const add = (test: HistoryObj[]) => dispatch(histotyAactions.add(test));

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
        <Result result={result} />
      )}
    </div>
  );
};
