import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';

export default function ArticleDetail({ headlines }) {
  const { id } = useParams();
  const article = headlines[parseInt(id)];

  if (!article) return <Typography>Article not found</Typography>; // Handle undefined article

  return (
    <Box p={2}>
      <Typography variant="h4">{article.title}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={article.urlToImage}
        style={{
          width: '100%', 
          maxWidth: '700px', 
          height: 'auto', 
          margin: '0 auto', 
          display: 'block', 
          borderRadius: '8px'
        }}
      />
      <Typography variant="subtitle1" mt={2}>
        {article.source.name} - {article.author || 'Unknown Author'}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {new Date(article.publishedAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body1" mt={2}>
        {article.content || article.description}
      </Typography>
    </Box>
  );
}
