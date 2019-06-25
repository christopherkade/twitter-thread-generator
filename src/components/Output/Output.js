import React from "react"

import { Tweet } from "./Tweet"

const Output = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet, index) => <Tweet key={index} text={tweet} index={index} total={tweets.length} />)}
    </>
  )
}

export default Output
