import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Row from '../../ui/Row'
const StyledInfo = styled.div``
const StyledLink = styled.a`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, #1abc9c, #149279);
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
  margin-bottom: 10px;
`
const StyledRow = styled.div`
  display: flex;
  gap: 10px;
`
const StyledImage = styled.img`
  width: 28px;
  margin-right: 0.7rem;
`
function ConnectWithus() {
  return (
    <Row>
      <Heading as='h2'>Let's get in touch</Heading>
      <p>
        If you want to colloborate or have some suggestions or any complaints
        please leave in your message , we will get back to you as soon as
        possible.
      </p>
      <StyledInfo class='info'>
        <StyledRow>
          <StyledImage
            src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/location.png'
            alt=''
          />
          <p>Vit vellore</p>
        </StyledRow>
        <StyledRow>
          <StyledImage
            src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/email.png'
            alt=''
          />
          <p>sanath.skamath2022@vitstudent.ac.in</p>
        </StyledRow>
        <StyledRow>
          <StyledImage
            src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/phone.png'
            alt='ph.no'
          />
          <p>123-456-789</p>
        </StyledRow>
      </StyledInfo>
      <div>
        <p>Connect with us :</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <StyledLink href='https://www.linkedin.com/in/sanath-s-kamath-391b9b24b/'>
            <FaLinkedin />
          </StyledLink>
          <StyledLink href='https://twitter.com/Sanath122'>
            <FaTwitter />
          </StyledLink>
          <StyledLink href='https://www.instagram.com/'>
            <FaInstagram />
          </StyledLink>
          <StyledLink href='https://www.facebook.com/reel/801033395371319'>
            <FaFacebook />
          </StyledLink>
        </div>
      </div>
    </Row>
  )
}

export default ConnectWithus
