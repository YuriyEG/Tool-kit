import type React from "react"

import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(52, 152, 219, 1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`

const Loader: React.FC = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
)

export default Loader
