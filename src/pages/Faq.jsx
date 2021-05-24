import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Footer} from './index'

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    padding: '6em 0 7em',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1em 0 1em',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
}))

const Faq = () => {
  const classes = useStyles()
  return (
    <div className={classes.faqContainer}>
      <Container className={classes.main}>
        <p className={'pixel-font'}>FAQ</p>

        <p className={'pixel-font'}>What is Pollen?</p>

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
