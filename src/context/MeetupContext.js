import React from 'react'

const MeetupContext = React.createContext({
  personName: '',
  topicName: '',
  changePersonName: () => {},
  changeTopicName: () => {},
  showErrorMsg: false,
  changeShowErrorMsg: () => {},
  isRegister: false,
})

export default MeetupContext
