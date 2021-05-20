import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  cardContainer: {
    width: '400px',
    textAlign: 'center',
    border: `4px dashed ${theme.palette.primary.contrastText}`,
    padding: '0',
  },
  card: {
    borderRadius: '0',
  },
  button: {
    margin: theme.spacing(1),
    color: '#0000EE',
    '&:hover': {
      fontSize: '1.3em',
      textDecoration: 'none',
      color: '#0000EE',
    },
  },
  cardPaper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    boxShadow: 'none',
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
        <Container component="main" className={classes.cardContainer}>
          <Card classes={{root: classes.cardPaper}} className={classes.card}>
            <CardContent className={'pixel-font'}>
              <p align="center" className={'pixel-font'}>
                {
                  'Donate to projects and support organizations in your community and beyond.'
                }
              </p>
            </CardContent>
            <CardActions className={classes.action}>
              <a
                className={`${classes.button} pixel-font`}
                variant={'contained'}
                color="primary"
                href="/map"
              >
                {'Enter The Garden'}
              </a>
            </CardActions>
          </Card>
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  )
}
