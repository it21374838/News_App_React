import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFetcher from './Components/NewsFetcher';
import ArticleDetail from './Components/ArticleDetail';

function App() {
  const [headlines, setHeadlines] = useState([]);
//
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFetcher setHeadlines={setHeadlines} />} />
        <Route path="/article/:id" element={<ArticleDetail headlines={headlines} />} />
      </Routes>
    </Router>
  );
}

export default App;
