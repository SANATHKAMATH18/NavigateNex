import styled from 'styled-components'
import ConnectWithus from '../features/contactus/ConnectWithus'
import ContactForm from '../features/contactus/ContactForm'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
function ContactUs() {
  return (
    <Row>
      <StyledLayout>
        <ConnectWithus />
        <div>
          <Heading as='h1'>Contact us form</Heading>
          <ContactForm />
        </div>
      </StyledLayout>
    </Row>
  )
}

export default ContactUs
