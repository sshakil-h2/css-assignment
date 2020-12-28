import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Tab from './components/Tab'
import Root from './components/Root'

const App = () => (
  <ThemeProvider theme={theme}>
    <Root>
    <Tab></Tab>
    </Root>
  </ThemeProvider>
)
export default App