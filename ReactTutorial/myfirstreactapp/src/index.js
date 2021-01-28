import React from "react";
import ReactDom from "react-dom";



function BookList() {
  return (
    <>
    <Person/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </>
  )
}

function Book() {
  return(
    <>
    <img src="" alt=""/>
    <h2></h2>
    <p></p>
    </>
  )
}


ReactDom.render(<BookList/>, document.getElementById("root"));
