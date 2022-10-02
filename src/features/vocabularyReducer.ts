import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VocabularyObj } from '../types/VocabularyObj';

const savedVocabulary = localStorage.getItem('vocabulary');
const initialState: VocabularyObj[] = savedVocabulary !== null ? JSON.parse(savedVocabulary) : [];

const vocabularySlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add: (vocabulary, action: PayloadAction<VocabularyObj>) => {
      const newPair: VocabularyObj = {
        word: action.payload.word,
        translation: action.payload.translation,
      };

      let changeTranslation = false;

      vocabulary.forEach((obj: VocabularyObj) => {
        if (obj.word === action.payload.word) {
          obj.translation.push(...action.payload.translation);

          changeTranslation = true;
        }
      });

      if (!changeTranslation) {
        vocabulary.push(newPair);
      }

      localStorage.setItem('vocabulary', JSON.stringify(vocabulary));

      return vocabulary;
    },

    remove: (vocabulary, action: PayloadAction<string>) => {
      const newVocabulary = vocabulary.filter(obj => obj.word !== action.payload);

      localStorage.setItem('vocabulary', JSON.stringify(newVocabulary));

      return newVocabulary;
    },
  },
});

export default vocabularySlice.reducer;
export const { actions } = vocabularySlice;
