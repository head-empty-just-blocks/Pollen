import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
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
    <Container className={classes.section}>
      <Typography variant="h3" gutterBottom>
        FAQ
      </Typography>
      <div className={classes.section}>
        <Typography variant="h6" gutterBottom>
          What is Pollen?
        </Typography>
      </div>
      <Typography>
        Pollen is a community platform changing the future of mutual aid by
        using blockchain technology.
      </Typography>
      <div className={classes.section}>
        <Typography variant="h6" gutterBottom>
          How does it work?
        </Typography>
      </div>
      <Typography>Another answer</Typography>
      <div className={classes.section}>
        <Typography variant="h6" gutterBottom>
          What is EOSIO?
        </Typography>
        <div className={classes.section}>
          <Typography variant="h6" gutterBottom>
            What is blockchain?
          </Typography>
          <Typography>
            Blockchain is commonly associated with cryptocurrency, but this only
            scrapes the surface of what is a robust technology. Blockchain is a
            technology that indeed powers cryptocurrency, but also has many
            additional potential use cases beyond cryptocurrency.
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default Faq
