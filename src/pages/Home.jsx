import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    width: 400,
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
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
      <div style={{maxHeight: '70vh', overflow: 'scroll'}}>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
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
        <Container maxWidth="md" component="main" className={classes.card}>
          <Card>
            <CardContent>
              <ul>
                <Typography component="li" variant="subtitle1" align="center">
                  {
                    'Donate to and support organizations in your community and beyond.'
                  }
                </Typography>
              </ul>
            </CardContent>
            <CardActions className={classes.action}>
              <Button
                className={classes.button}
                variant={'contained'}
                color="primary"
                href="/map"
              >
                {'Enter The Garden'}
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  )
}
