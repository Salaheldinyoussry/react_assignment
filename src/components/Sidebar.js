import "./sidebar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import rec from './images/rec.png'
import pro from "../images/pro.jpg";
import line from "../images/line.svg";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

import React from "react";
import {Menue} from "./Menue";



export class Sidebar extends React.Component {
 render() {
  
  return (
 <div className="sideBar">
        <div className="upper-sidebar">
          <img src={pro} alt="My profile"></img>
          <h2 className="maintext">Michael Atkisons</h2>
          <Row>
            <a className="profileLink" href="#">
              My profile
            </a>
          </Row>
          <img src={line} alt="My profile"></img>
        </div>
        <div className='btns'>
            
        <h3 >MENUE</h3>
        <Menue/>
        <div className='sideBtns'>
          <button className="btns oneBtn">Upgrade Plan</button>
       
          <button className="btns oneBtn2">Contact Support</button>
       </div>
        </div>
      </div>

 



  );
        

}
}


