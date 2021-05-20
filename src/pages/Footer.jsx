import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
// import { Link } from 'react-router-dom';
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
  footer: {
    backgroundColor: '#98bf64',
    padding: theme.spacing(3),
    position: 'fixed',
    bottom: '0',
    width: '100vw',
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container
      component="footer"
      className={`${classes.footer} pixel-font`}
      maxWidth={false}
    >
      <Grid container justify="flex-start">
        <Grid item>
          <ul>
            <li>
              <Link href="/about" color="textSecondary">
                {'About'}
              </Link>
            </li>
            <li>
              <Link href="/faq" color="textSecondary">
                {'FAQ'}
              </Link>
            </li>
            <li>
              <Link href="/contact" color="textSecondary">
                {'Contact'}
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
