import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MeetupContext from './context/MeetupContext'
import NotFound from './components/NotFound'
import RegisterPage from './components/RegisterPage'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    personName: '',
    topicName: 'ARTS_AND_CULTURE',
    showErrorMsg: false,
    isRegister: false,
  }

  changePersonName = personName => this.setState({personName, isRegister: true})

  changeTopicName = topicName => this.setState({topicName})

  changeShowErrorMsg = () => {
    this.setState({
      showErrorMsg: true,
    })
  }

  render() {
    const {personName, topicName, showErrorMsg, isRegister} = this.state
    return (
      <MeetupContext.Provider
        value={{
          personName,
          topicName,
          showErrorMsg,
          isRegister,
          changeShowErrorMsg: this.changeShowErrorMsg,
          changePersonName: this.changePersonName,
          changeTopicName: this.changeTopicName,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={RegisterPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </MeetupContext.Provider>
    )
  }
}

export default App
