import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
const Tabheading = styled.div`
  display: flex;
  transform: translateY(30px);
  justify-content: space-around;
`
const StyledImage = styled.img`
  height: 60px;
  margin: 0 20px;
  padding: 2px;
`
const TableMessage = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
  background-color: aliceblue;
  min-height: 200px;
`
const message = [
  {
    mainmessage: 'These are signs are informative and may be useful to you.',
    content:
      'Signs that give information. These are represented by blue rectangles',
  },
  {
    mainmessage: 'These are signs are informative and may be useful to you.',
    content:
      'Signs that give information. These are represented by blue rectangles',
  },
  {
    mainmessage: 'These are signs are informative and may be useful to you.',
    content:
      'Signs that give information. These are represented by blue rectangles',
  },
]
function Tab() {
  const [active, setActive] = useState(1)
  return (
    <div className='container'>
      <Tabheading className='bloc-tabs'>
        <Button size='large' variation='secondary' onClick={() => setActive(1)}>
          Tab 1
        </Button>
        <Button size='large' variation='secondary' onClick={() => setActive(2)}>
          Tab 2
        </Button>
        <Button size='large' variation='secondary' onClick={() => setActive(3)}>
          Tab 3
        </Button>
      </Tabheading>
      <TableMessage>
        <StyledImage src={`./impsgn-${active}.png`}></StyledImage>
        <div>
          <div>
            <Heading as='h4'>{message[active - 1].mainmessage}</Heading>
            <Heading as='h5'>{message[active - 1].content}</Heading>
          </div>
        </div>
      </TableMessage>
    </div>
  )
}

function Importantsigns() {
  return (
    <div>
      <Heading as='h2' style={{ textAlign: 'center', color: '#5ec576' }}>
        Basic Types of traffic signal
      </Heading>
      <Heading as='h3' style={{ textAlign: 'center' }}>
        The most important traffic signs
      </Heading>
      <Tab />
    </div>
  )
}

export default Importantsigns
