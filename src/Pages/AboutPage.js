import React, { useEffect, useState } from 'react'

export const AboutPage = () => {
  let [text, setText] = useState("")

  useEffect(() => {
    console.log('I have been loaded into the DOM')
    // TODO: Call API when this component loads...
  }, []) //<=== Empty dependacy array.
  
  useEffect(() => {
    if (text) { //Ignoring the change from undefined to ''.
      console.log('Text has changed')
    }
  }, [text]) //<=== Monitors canges in text

  const handleClick = () => {
    setText("changed")
  }

  return (
    <div>
      AboutPage
      <br />
      <button onClick={() => handleClick()}>Push</button>
      </div>
  )
}