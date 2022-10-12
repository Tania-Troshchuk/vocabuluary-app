import { VocabularyObj } from '../types/VocabularyObj';

const getRandomNumber = (number: number) => {
  return Math.floor(Math.random() * number);
};

const getWordIndexes = (number: number, arr: VocabularyObj[]) => {
  const indexes: number[] = [];

  while (indexes.length < number) {
    const index = getRandomNumber(arr.length);

    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }

  return indexes;
};

const getOptions = (objIndex: number, arr: VocabularyObj[], quantity: number) => {
  const correctTranslation = arr[objIndex].translation.join(', ');
  const options: string[] = [correctTranslation];

  while (options.length < quantity) {
    const index = getRandomNumber(arr.length);
    const word = arr[index].translation.join(', ');

    if (index !== objIndex && !options.includes(word)) {
      options.push(word);
    }
  }

  return options;
};

export const getWordsForTest = (arr: VocabularyObj[], length:number, quantity: number) => {
  const wordIndexes = getWordIndexes(length, arr);

  const arrOfWords = wordIndexes.map((index) => {
    const obj = arr[index];
    const options = getOptions(index, arr, quantity);

    const preparedObj = {
      ...obj,
      options: [...options].sort(() => 0.5 - Math.random()),
    };

    return preparedObj;
  });

  return arrOfWords;
};
