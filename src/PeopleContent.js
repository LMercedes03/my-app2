import React from "react";
import { useState } from "react";
import { People } from "./People";

export const PeopleContent = () => {
    const [show, setShow] = useState(true)
    const [text, setText] = useState("Hide")

    const people = [
        { id: 1, firstName: "Alice", lastName: "Zephyr"},
        { id: 2, firstName: "Bob", lastName: "Yarrow" },
        { id: 3, firstName: "Charlie", lastName: "Xavier" },
        { id: 4, firstName: "Dave", lastName: "Winters" },
        { id: 5, firstName: "Ed", lastName: "Vaughn" },
    ]

  const handleClick = () => {
    setShow(!show)
    if (show){
        setText("Show")
    } else {
        setText("Hide")
    }
  }

  return (
    <div>
      <button onClick={() => handleClick()}>{text}</button>
      {
        show &&
        <People data={people}/>
      }
    </div>
  );
}