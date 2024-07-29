import styled from "styled-components"

import Repositories from "../widgets/Repositories"

import RepositoryCard from "../features/RepositoryCard"
import { useEffect, useState } from "react"

import { $repositoryCard } from "../models/RepositoryCardEffector"
import { useUnit } from "effector-react"
import PortalModal from "../shared/ui/Portal"

import { closeCard } from "../models/RepositoryCardEffector"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgba(223, 229, 206, 1);
  padding-top: 80px;
`
const App = () => {
  const { isOpen } = useUnit($repositoryCard)

  return (
    <Container>
      <button onClick={() => setIsOpen(true)}>Open</button>

      {isOpen && (
        <PortalModal onClose={closeCard}>
          <RepositoryCard />
        </PortalModal>
      )}

      <Repositories changeId={id => setId(id)} />
    </Container>
  )
}

export default App
