import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeadlinesList({ data, index }) {
  return (
    <Box>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={data.urlToImage}
        />
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }}>
            <Link to={`/article/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {data.title}
            </Link>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {data.source.name} - {data.author || 'Unknown Author'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(data.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
