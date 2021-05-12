import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(3),
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div style={{maxHeight: '70vh', overflow: 'scroll'}}>
      <Container className={classes.section}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <div className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Living in New York, we have witnessed firsthand the power in
            harnessing community in the form of mutual aid. The city runs on the
            kindness of strangers and we believe in the potential of capturing
            this desire to help others and inspire actionable results. Pollen is
            a decentralized application that promotes transparency and social
            impact to your local community and beyond.
          </Typography>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default About
