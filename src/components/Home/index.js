import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import {
  Container,
  Heading,
  Paragraph,
  Heading2,
  Paragraph2,
  Button,
  Image,
  LogoImage,
  ResponsiveContainer,
  NavHeader,
} from './styledComponents'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {personName, topicName, isRegister} = value
      console.log(isRegister)
      const renderHomePage = () => (
        <ResponsiveContainer>
          <Container>
            <Heading>Welcome to Meetup</Heading>
            <Paragraph>Please register for the topic</Paragraph>
            <Link to="/register">
              <Button type="button">Register</Button>
            </Link>

            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </Container>
        </ResponsiveContainer>
      )

      const renderNewPersonPage = () => (
        <ResponsiveContainer>
          <Container>
            <Heading2>Hello {`${personName}`}</Heading2>
            <Paragraph2>Welcome to {`${topicName}`}</Paragraph2>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </Container>
        </ResponsiveContainer>
      )

      return (
        <>
          <NavHeader>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </NavHeader>

          {isRegister ? renderNewPersonPage() : renderHomePage()}
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
