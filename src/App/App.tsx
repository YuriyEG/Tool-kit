import styled from "styled-components"

import Repositories from "../widgets/Repositories"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgba(223, 229, 206, 1);
  padding-top: 80px;
`

const App = () => {
  return (
    <Container>
      <Repositories />
    </Container>
  )
}

export default App
