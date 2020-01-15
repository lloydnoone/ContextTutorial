import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Navbar from './Navbar'
import Form from './Form'
import PageContent from './PageContent'
import { ThemeProvider } from './contexts/ThemeContext'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar/>
          <Form />
        </PageContent>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)