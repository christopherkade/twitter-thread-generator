import React, { useState } from 'react'
import styled from "styled-components"

import { Header } from "./components/Header"
import { TextBox } from "./components/TextBox"
import { Output } from "./components/Output"
import { Counter } from "./components/Counter"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 0.75rem;
  width: 100%;
`

const App = () => {
  const [tweets, setTweets] = useState([])
  const [totalCharacters, setTotalCharacters] = useState(0)

  /**
   * Called when the user inputs
   * Calculates in what Tweet the current input should go
   * Updates our Tweet values
   * @param {*} e
   */
  // TODO: Fix bug when pasting large amounts of text
  const parseTweet = (e) => {
    const { value } = e.target
    let currentTweets = tweets
    // Total number of Tweets (starting at 0)
    const numTweets = Math.trunc(value.length / 280)

    // Save the content of our last tweet at the last position of our array
    currentTweets[numTweets] = value.substring(280 * numTweets, value.length)

    // Handles Tweet removal when the user deletes characters
    if (currentTweets.length !== numTweets + 1) {
      currentTweets.pop()
    }

    // When the user completely clears the textarea, reset the array
    if (value.length === 0) {
      currentTweets = []
    }

    setTweets(currentTweets)
    setTotalCharacters(value.length)
  }

  return (
    <>
      <Header />
      <ContentWrapper>
        <TextBox placeholder="What's happening?" onChange={parseTweet} />
        <Counter>Total characters: {totalCharacters} • Total tweets: {tweets.length}</Counter>
        <Output tweets={tweets} />
      </ContentWrapper>
    </>
  );
}

export default App;
