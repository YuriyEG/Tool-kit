import styled from "styled-components"

import Repositories from "../widgets/Repositories"

import RepositoryCard from "../features/RepositoryCard"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
      <Router>
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/details/:id" element={<RepositoryCard />} />{" "}
        </Routes>
      </Router>
    </Container>
  )
}

export default App
