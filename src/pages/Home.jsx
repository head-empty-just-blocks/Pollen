import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Footer from './Footer.jsx'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to the Garden!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {
                      'NYC runs on the kindness of strangers. Support organizations in your community and beyond.'
                    }
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button variant={'contained'} color="primary">
                  {'Learn More'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
