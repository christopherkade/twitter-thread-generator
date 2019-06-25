import React, { useState } from "react"
import styled from "styled-components"

import { phrases } from "./phrases.json"
import TwitterIcon from "./twitter.svg"
import { Icon } from "./Icon"

const Wrapper = styled.article`
  margin: 2rem;
  display: flex;
`

const Text = styled.h1`
  font-size: 1.125rem;
  font-weight: 300;
  color: rgb(20, 23, 26);
  margin-left: 1rem;
`

const Header = () => {
  const [phrase, setPhrase] = useState(phrases[0])

  const selectRandomPhrase = () => setPhrase(phrases[Math.floor(Math.random() * phrases.length)])

  return (
    <Wrapper>
      <Icon src={TwitterIcon} onClick={selectRandomPhrase} alt="" />
      <Text>&#60; {phrase}</Text>
    </Wrapper>
  )
}

export default Header
