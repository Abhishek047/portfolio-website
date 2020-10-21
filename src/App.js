import React from 'react'
import ContactForm from './components/contactForm/ContactForm'
import HomePage from './components/HomePage'
import AllProjects from './components/project/AllProjects'
import GetProject from './components/project/GetProject'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Menu from './components/Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import AddProject from './components/admin/AddProject'

function App() {
  return (
  <>
    <Router>
      <ThemeProvider theme={theme} >
      <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/admin/addProject" component={AddProject} />
          <Route path="/projects" exact component={AllProjects} />
          <Route path="/projects/:id" component={GetProject} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  </>
  );
}

export default App;
