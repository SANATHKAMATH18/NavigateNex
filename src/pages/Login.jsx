import styled from 'styled-components'
import LoginForm from '../features/authentication/LoginForm'
import Logo from '../ui/Logo'
import Heading from '../ui/Heading'
import { Link } from 'react-router-dom'

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

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as='h4'>Log in to your account</Heading>
      <LoginForm />
      <StyledLink to='/signin'>Sign in if no account</StyledLink>
    </LoginLayout>
  )
}

export default Login
