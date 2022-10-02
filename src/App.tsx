import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { AddWordPage } from './pages/AddWordPage/AddWordPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { TestPage } from './pages/TestPage/TestPage';
import { TestsHistoryPage } from './pages/TestsHistoryPage/TestsHistoryPage';
import { VocabularyPage } from './pages/VocabularyPage/VocabularyPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<VocabularyPage />} />
          <Route path="/add-word" element={<AddWordPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/tests-history" element={<TestsHistoryPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
