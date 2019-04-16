import React, { Component } from "react";
//import "./Menubutton.css";

class Menubutton extends React.Component {
   constructor() {
     super();
     this.state = {
       name         : "default",
       pressedCount : 0
     }
   }
   render() {
     return (
          <button className="Menubutton">{this.state.name}</button>
     )
   }
}

export default Menubutton;
