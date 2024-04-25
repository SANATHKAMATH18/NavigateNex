import styled from 'styled-components'
import Importantsigns from '../features/course-learning/Importantsigns'
import SignSlider from '../features/course-learning/SignSlider'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import Videos from '../features/course-learning/Videos'

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  background-color: #4caf50; /* Green */
  color: white;
  border: 2px solid #4caf50;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: white;
    color: #4caf50;
  }

  &:active {
    background-color: #e7e7e7;
    border-color: #e7e7e7;
  }
`

function CourseLearning() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>CourseLearning</Heading>
      </Row>
      <Row>
        <Importantsigns />
        <SignSlider />
        <Videos />
        <Heading as='h1'>To test your knowledge lets take a small quiz</Heading>
        <Button href='https://navigate-nex-quiz.netlify.app/'>
          Click to take the test
        </Button>
      </Row>
    </>
  )
}

export default CourseLearning
