import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
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
    width: '100vw',
  },
  welcome: {
    color: theme.palette.primary.contrastText,
    fontSize: '1.2em',
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.homeContainer}>
        <Container component="main" className={classes.heroContent}>
          <p align="center" className={`${classes.welcome} pixel-font`}>
            {'Welcome to the Garden!'}
          </p>
        </Container>
        <Container component="main" className={classes.card}>
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
        <Footer />
      </div>
    </React.Fragment>
  )
}
