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
  border: 8px solid rgba(0, 0, 0, 0.1); // светлый цвет фона
  border-left-color: #3498db; // цвет индикатора
  border-radius: 50%;
  width: 60px; // ширина индикатора
  height: 60px; // высота индикатора
  animation: ${spin} 1s linear infinite; // анимация вращения
`

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  )
}

export default Loader
