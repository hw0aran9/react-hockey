import React from 'react'; // , {Component}
import "./Menubutton.css";

class Menubutton extends React.Component {
   constructor() {
     super();
     this.state = {
       name         : "default"
     }
   }
   render() {
     return (
          <button className="Menubutton">{this.state.name}</button>
     )
   }
}

export default Menubutton;
