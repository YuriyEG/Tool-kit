import type { FC } from "react"
import { useEffect } from "react"

import styled from "styled-components"
import { createPortal } from "react-dom"

type Props = {
  children: React.ReactNode
}

const OverlayContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 100;
  z-index: 1;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`

const PortalModal: FC<Props> = (props: Props) => {
  const { children } = props
  const element = document.getElementById("modal-root")!

  const Overlay = ({ children }) => {
    useEffect(() => {
      const html = document.getElementsByTagName("html")
      html[0].style.overflow = "hidden"
      return () => {
        const html = document.getElementsByTagName("html")
        html[0].style.overflow = "scroll"
      }
    }, [])
    return (
      <OverlayContainer>
        <CloseButton onClick={props.onClose}>&times;</CloseButton>
        {children}
      </OverlayContainer>
    )
  }

  if (props.open) {
    return createPortal(<Overlay>{children}</Overlay>, element)
  }
}

export default PortalModal
