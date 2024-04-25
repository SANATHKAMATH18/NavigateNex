import styled, { css } from 'styled-components'

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 300;
    `}
    
    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.2;
      font-weight: 600;
      text-align: center;
    `}

    ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1.2;
      padding: 4px;
      font-weight: 400;
      color: #000000d5;
      text-align: center;
    `}
  line-height: 1.4;
`

export default Heading
