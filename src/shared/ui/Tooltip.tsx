import styled from "styled-components"

const TooltipWrapper = styled.span`
  width: fit-content;
  position: relative;
  display: inline-block;
  cursor: pointer;
  opacity: 0.8;
`

const TooltipText = styled.a`
  visibility: hidden;
  min-width: 100px;
  min-height: 20px;
  background-color: rgba(40, 40, 40, 1);
  color: rgba(255, 255, 255, 1);
  text-align: center;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transition: 0.4s ease-in all;
  }
`

const Tooltip = ({ children, content }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText href={content} target="_blank">
        {content}
      </TooltipText>
    </TooltipWrapper>
  )
}

export default Tooltip
