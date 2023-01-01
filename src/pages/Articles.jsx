import React from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getAllArticles } from '../store/articles/actions'
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectArticlesError, selectArticlesLoading } from "../store/articles/selectors";

export function Articles() {
  
  const dispatch = useDispatch()
  const articles = useSelector(selectArticles)
  const error = useSelector(selectArticlesError)
  const loading = useSelector(selectArticlesLoading)

  const requestArticles = () => {
    dispatch(getAllArticles())
  }

  useEffect(() => {
    requestArticles()
  }, [])

  if(error) {
    return (
      <>
      <h3>Error</h3>
      <button onClick={requestArticles} >Retry</button>
      </>
    )
  }

  return (
    <>
      <h1>Article</h1>
      <Button 
        variant="contained" 
        color="success"
        onClick={requestArticles}
        >
          Get API
      </Button>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && articles.map((article) => (
      <Box sx={{ display: 'flex', justifyContent: 'center' }} key={article.id}>
        <Card sx={{ maxWidth: 345 }} key={article.id} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={article.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    </Box>
    ))} 
    </>
  )
}