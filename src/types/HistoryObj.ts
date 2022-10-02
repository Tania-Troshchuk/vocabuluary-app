import { VocabularyObj } from './VocabularyObj';

export interface HistoryObj extends VocabularyObj {
  choosedTranslation: string,
}
