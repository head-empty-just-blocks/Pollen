import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
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
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    color: 'black',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div>
      <CssBaseline />
      <Container component="footer" className={`${classes.footer} pixel-font`}>
        <Grid container spacing={4} justify="flex-start">
          <Grid item xs={6} sm={3}>
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
    </div>
  )
}

export default Footer
