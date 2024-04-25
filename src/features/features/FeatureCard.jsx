import styled from 'styled-components'
import Row from '../../ui/Row'

const StyledRow = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`
function FeatureCard() {
  return (
    <Row>
      <StyledRow>
        <img
          src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/dl.jpeg'
          alt=''
        />
        <div>
          <h2>DRIVING LICSENCE</h2>
          <p> Courses on 2 wheeler and 4 wheeler driving license.</p>
        </div>
      </StyledRow>
      <StyledRow>
        <img
          src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/trafficpolice.jpeg'
          alt=''
        />
        <div>
          <h2>Traffic police training</h2>
          <p>
            {' '}
            Exclusive courses for people who desire to be traffic policemen.
          </p>
        </div>
      </StyledRow>
      <StyledRow>
        <img
          src='https://huoxpcnxugdqstqfegkn.supabase.co/storage/v1/object/public/images/fasttag%20(1).png'
          alt=''
        />
        <div>
          <h2> General guidlines about traffic</h2>
          <p>
            Learn how the traffic system function in India toll system , fast
            tag and latest technoligical development in this industry{' '}
          </p>
        </div>
      </StyledRow>
    </Row>
  )
}

export default FeatureCard
