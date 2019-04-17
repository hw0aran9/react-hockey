import React from 'react'; // , {Component}
import "./Menubar.css";
import "./ButtonWrapper.css"
//import Menubutton from './Menubutton';
import MenubuttonAlt from './MenubuttonAlt';

function Menubar ()
{
  return (
          <div className="Menubar">
            <div className="ButtonWrapper">
              <MenubuttonAlt />
              <MenubuttonAlt />
              <MenubuttonAlt />
            </div>
          </div>
  )
}

export default Menubar;
