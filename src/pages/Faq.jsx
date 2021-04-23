import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  section: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(1),
  },
}))

const Faq = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.main}>
        <Typography variant="h3" gutterBottom>
          FAQ
        </Typography>

        <Typography variant="h6" gutterBottom>
          What is Pollen?
        </Typography>

        <Typography>
          Pollen is a community platform changing the future of mutual aid by
          using blockchain technology.
        </Typography>

        <Typography variant="h6" gutterBottom>
          How does it work?
        </Typography>

        <Typography>Donors = Bees</Typography>
        <Typography>Organizations = Flowers</Typography>
        <Typography>Donations = Pollen</Typography>
        <Typography>
          Bees sprinkle pollen on any flower they'd like to see flourish!
        </Typography>

        <Typography variant="h6" gutterBottom>
          What is EOS.IO?
        </Typography>
        <Typography>
          EOS.IO is a software used to launch blockchain. It is used to create
          decentralized applications. Typically,a developer must run servers to
          deploy an application, but EOS.IO's vision is to create an
          infrastructure where developers can build and deploy apps without
          having to run said servers.
        </Typography>

        <Typography variant="h6" gutterBottom>
          What is blockchain?
        </Typography>
        <Typography>
          Blockchain is commonly associated with cryptocurrency, but this only
          scrapes the surface of what is a robust technology. Blockchain is a
          technology that indeed powers cryptocurrency, but also has many
          additional potential use cases beyond cryptocurrency. An application
          developed on blockain uses smart contracts to verify transactions in a
          secure and transparent way.
        </Typography>
      </Container>
      <Footer />
    </div>
  )
}

export default Faq
