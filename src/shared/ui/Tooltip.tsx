import PropTypes from "prop-types"
import type { FC } from "react"

import styled from "styled-components"

interface ITooltipProps {
  children: React.ReactNode
  content: string
}

const TooltipWrapper = styled.span`
  width: auto;
  position: relative;
  display: inline-block;
  cursor: pointer;
  opacity: 0.8;
`

const TooltipText = styled.a`
  visibility: hidden;
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
  transition: opacity 0.2s ease-in;
  transition-delay: 0.2s;
  font-size: 18px;
  line-height: 18px;
  font-family: Regular, Arial;
  word-break: keep-all;

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.4s ease-in;
  }
`

const Tooltip: FC<ITooltipProps> = ({ children, content }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText href={content} target="_blank" rel="noopener noreferrer">
        {content}
      </TooltipText>
    </TooltipWrapper>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
}

export default Tooltip
