import Heading from '../ui/Heading'
import SignupForm from '../features/authentication/SignupForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
const StyledLink = styled(Link)`
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  margin: 10px;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`

const SigninLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 72rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`
function Signin() {
  return (
    <div>
      <SigninLayout>
        <Logo />
        <Heading as='h1'>Sign in</Heading>
        <SignupForm />
        <StyledLink to='/login'>Go back to login</StyledLink>
      </SigninLayout>
    </div>
  )
}

export default Signin
