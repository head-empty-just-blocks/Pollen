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
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="flex-start">
          <Grid item xs={6} sm={3}>
            <ul>
              <li>
                <Link href="/about" variant="subtitle1" color="textSecondary">
                  {'About'}
                </Link>
              </li>
              <li>
                <Link href="/faq" variant="subtitle1" color="textSecondary">
                  {'FAQ'}
                </Link>
              </li>
              <li>
                <Link href="/contact" variant="subtitle1" color="textSecondary">
                  {'Contact'}
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Footer
