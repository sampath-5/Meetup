import MeetupContext from '../../context/MeetupContext'
import {
  NavHeader1,
  Image1,
  Container2,
  RegisterImage,
  Form,
  Heading1,
  LabelElement,
  InputElement,
  Select,
  Option,
  SubmitButton,
  ResponsiveContainer,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterPage = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        changePersonName,
        changeTopicName,
        changeShowErrorMsg,
        showErrorMsg,
        personName,
        topicName,
      } = value

      const onChangePersonName = event => {
        changePersonName(event.target.value)
      }

      const onChangeTopicName = event => {
        changeTopicName(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        const {history} = props
        if (personName === '') {
          return changeShowErrorMsg()
        }
        return history.replace('/')
      }
      console.log(topicName)
      const errorMsg = 'Please enter your name'

      return (
        <>
          <NavHeader1>
            <Image1
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </NavHeader1>
          <ResponsiveContainer>
            <Container2>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={onSubmitForm}>
                <Heading1>Let us join</Heading1>
                <LabelElement htmlFor="personName">NAME</LabelElement>
                <InputElement
                  id="personName"
                  value={personName}
                  onChange={onChangePersonName}
                  placeholder="Your name"
                  type="text"
                />

                <LabelElement htmlFor="topicName">TOPICS</LabelElement>
                <Select
                  onChange={onChangeTopicName}
                  id="topicName"
                  value={topicName}
                >
                  {topicsList.map(eachList => (
                    <Option key={eachList.id} value={eachList.id}>
                      {eachList.displayText}
                    </Option>
                  ))}
                </Select>
                <SubmitButton type="submit">Register Now</SubmitButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </Form>
            </Container2>
          </ResponsiveContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default RegisterPage
