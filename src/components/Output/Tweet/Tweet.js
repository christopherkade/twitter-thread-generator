import React, { useState } from "react"
import styled from "styled-components"
import ClipboardJS from "clipboard"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 620px) {
    width: 100%;
  }
`

const OutputTextBox = styled.textarea`
  font-family: "Helvetica", sans-serif;
  font-size: 1rem;
  box-shadow: 0 0 0 1pt black;
  width: 31.25rem;
  overflow-wrap: break-word;
  padding: 0.5rem;
  min-height: 5rem;
  resize: none;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`

const CopyIcon = styled.span`
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  margin-left: 1rem;
`

const TweetNumber = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 300;
`

const Tweet = ({ text, index, total }) => {
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  // Setup our clipboard
  // On click, copy the Tweet's content
  const clipboard = new ClipboardJS(`#tweet-${index}`)
  clipboard.on('success', () => setCopied(true))

  const handleHover = (isHovered) => {
    setCopied(false)
    setHovered(isHovered)
  }

  return (
    <Wrapper>
      <TweetNumber>
        {index + 1}/{total}
      </TweetNumber>
      <OutputTextBox
        readOnly
        id={`tweet-${index}`}
        data-clipboard-target={`#tweet-${index}`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        value={text}
      />
      <CopyIcon role="img" aria-label="copy tweet">
        {hovered ? (copied ? "✅" : "📋") : ""}
      </CopyIcon>
    </Wrapper>
  )
}

export default Tweet
