import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

export default function Footer() {
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
        <Box mt={5} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  )
}