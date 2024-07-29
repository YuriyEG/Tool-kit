import ReactDOM from "react-dom"
import styled from "styled-components"

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  position: absolute;
  z-index: 4;
  width: auto;
  height: auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <Overlay>
      <Content>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.getElementById("modal-root"),
  )
}

export default Modal
