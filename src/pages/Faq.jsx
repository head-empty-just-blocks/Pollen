import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(4),
  },
  faqContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '1.2em',
  },
}))

const Faq = () => {
  const classes = useStyles()
  return (
    <div
      style={{height: '100vh', overflow: 'scroll'}}
      className={classes.faqContainer}
    >
      <Container className={classes.main}>
        <p className={'pixel-font'}>FAQ</p>

        <p className={'pixel-font'} gutterBottom>
          What is Pollen?
        </p>

        <p className={'pixel-font'}>
          Pollen is a community platform changing the future of mutual aid by
          using blockchain technology.
        </p>

        <p className={'pixel-font'}>How does it work?</p>

        <p>Donors = Bees</p>
        <p>Organizations = Flowers</p>
        <p>Donations = Pollen</p>
        <p>Bees sprinkle pollen on any flower they'd like to see flourish!</p>

        <p>What is EOS.IO?</p>
        <p>
          EOS.IO is a software used to launch blockchain. It is used to create
          decentralized applications. Typically,a developer must run servers to
          deploy an application, but EOS.IO's vision is to create an
          infrastructure where developers can build and deploy apps without
          having to run said servers.
        </p>

        <p className={'pixel-font'}>What is blockchain?</p>
        <p>
          Blockchain is commonly associated with cryptocurrency, but this only
          scrapes the surface of what is a robust technology. Blockchain is a
          technology that indeed powers cryptocurrency, but also has many
          additional potential use cases beyond cryptocurrency. An application
          developed on blockain uses smart contracts to verify transactions in a
          secure and transparent way.
        </p>
      </Container>
      <Footer />
    </div>
  )
}

export default Faq
