import React from "react";

function ICard(props) {
  const a = 21;
  let name = "Aman";

  return (
    <div
      style={{    borderRadius: "5%",      border: "5px solid red",    height: "450px",    width: "300px"  }} >
      <h2  style={{ backgroundColor: "blue", color: "white"  }} >  ABES Engineering College </h2>
      <img src={props.pic} height={200}   width={150}  />
      <h3>Rollno: {props.rollno}</h3>
      <h3>Name: {props.Name}</h3>
      <h3>Branch: {props.Branch}</h3>
    </div>
  );
}

export default ICard;