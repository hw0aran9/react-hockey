import React, { Component } from 'react';
import "./Menubar.css";
import "./ButtonWrapper.css"
import Menubutton from './Menubutton';

function Menubar ()
{
  return (
          <div className="Menubar">
            <div className="ButtonWrapper">
              <Menubutton />
              <Menubutton />
              <Menubutton />
            </div>
          </div>
  )
}

export default Menubar;
