import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  section: {
    marginTop: theme.spacing(3),
  },
  toolbar: {
    marginTop: theme.spacing(2),
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
          Question?
        </Typography>
      </div>
      <Typography>Answer</Typography>
      <div className={classes.section}>
        <Typography variant="h6" gutterBottom>
          Another question?
        </Typography>
      </div>
      <Typography>Another answer</Typography>
    </Container>
  )
}

export default Faq
