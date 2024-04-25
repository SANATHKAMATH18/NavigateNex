import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Dashboard() {
  return (
    <>
      <Row>
        <Heading as='h1'>Welcome to Navigate nex</Heading>
        <Heading as='h2'>
          You you will have a great time and we ensure a high quality servive{' '}
        </Heading>
        <img
          src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/hero.jpeg'
          alt='car'
        />
        <Heading as='h2'>
          We are 24/7 open and one of the top rated websited related to traffic
          in India{' '}
        </Heading>
        <Heading as='h2'>
          Traffic trends reflect a complex interplay of urbanization,
          technology, remote work, public transportation, and environmental
          concerns. Urbanization continues to fuel congestion in cities, while
          technology offers solutions like navigation apps and ride-sharing to
          mitigate it. Remote work's rise during the pandemic temporarily
          reduced commuting traffic, but its long-term impact remains uncertain.
          Public transportation systems face challenges, potentially increasing
          reliance on personal vehicles. However, growing environmental
          awareness encourages sustainable options like electric vehicles and
          cycling, which could alleviate congestion and reduce emissions. These
          trends highlight the need for comprehensive transportation policies
          that balance efficiency, accessibility, and environmental
          sustainability in our increasingly interconnected world.
        </Heading>
      </Row>
    </>
  )
}

export default Dashboard
