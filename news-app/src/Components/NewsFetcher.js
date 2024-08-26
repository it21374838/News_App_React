import React, { useEffect, useState } from 'react';
import HeadlinesList from './HeadlinesList';
import { Grid } from '@mui/material';

export default function NewsFetcher({ setHeadlines }) {
  const [news, setNews] = useState([]);
//Connection that Fetches data from API
  const getNews = () => {
    fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=5e04527fbd9248a3a3b88044ec7611d1")
      .then(res => res.json())
      .then(json => {
        const articles = json.articles || [];
        setNews(articles);
        setHeadlines(articles); // Set headlines in App state
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setNews([]);
        setHeadlines([]); // Set headlines to an empty array on error
      });
  };

  useEffect(() => {
    getNews();
  }, []);
//displayed in Grid way
  return (
    <div>
      <Grid container spacing={2}> 
        {news.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <HeadlinesList data={data} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
