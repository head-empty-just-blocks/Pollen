import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(3),
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div style={{height: '100vh', backgroundColor: 'black', color: 'white'}}>
      <Container className={classes.section}>
        <p
          className={'pixel-font'}
          style={{marginRight: '20px', marginLeft: '20px'}}
        >
          About Us
        </p>
        <div style={{marginRight: '20px', marginLeft: '20px'}}>
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
