import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    paddingTop: '6rem',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    color: theme.palette.primary.contrastText,
    height: '100%',
    padding: theme.spacing(4),
    justifyContent: 'center',
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutContainer}>
      <Container className={classes.section}>
        <p className={'pixel-font'} style={{}}>
          About Us
        </p>
        <div>
          <p className={'pixel-font'}>
            Living in New York, we have witnessed firsthand the power in
            harnessing community in the form of mutual aid. The city runs on the
            kindness of strangers and we believe in the potential of capturing
            this desire to help others and inspire actionable results. Pollen is
            a decentralized application that promotes transparency and social
            impact to your local community and beyond.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default About
