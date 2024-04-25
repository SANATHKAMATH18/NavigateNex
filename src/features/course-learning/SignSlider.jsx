import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import Heading from '../../ui/Heading'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`
function SignSlider() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  let sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  }
  return (
    <>
      <Heading as='h1'>ALl symbols you need to know </Heading>
      <div className='slider-container' style={{ marginTop: '30px' }}>
        <input
          onChange={(e) => sliderRef.slickGoTo(e.target.value)}
          value={slideIndex}
          type='range'
          min={0}
          max={3}
        />
        <Slider
          ref={(slider) => {
            sliderRef = slider
          }}
          {...settings}
        >
          <div>
            <StyledImage src={`./mandatory-traffic-signs.jpg`} alt='pic-2' />
            <Heading as='h1'>Mandatory Traffic signs</Heading>
          </div>
          <div>
            <StyledImage src={`./informative-traffic-signs.jpg`} alt='pic-1' />
            <Heading as='h1'>informative traffic signs</Heading>
          </div>
          <div>
            <StyledImage src={`./cautionary-traffic-signs.jpg`} alt='pic-3' />
            <Heading as='h1'>cautionary traffic signs</Heading>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default SignSlider
