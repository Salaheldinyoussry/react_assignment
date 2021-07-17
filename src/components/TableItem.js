import "./tableItem.css";

import "bootstrap/dist/css/bootstrap.min.css";
import a from "./images/a.png";
import b from "./images/b.png";
import c from "./images/c.png";


import active from  "./images/active.png";
import pause from  "./images/pause.png";
import mainline from "./images/mainline.svg";
import dotsicon from './images/dotsicon.svg'

import { Button, Container, Row, Col, Image } from "react-bootstrap";

import React from "react";



export class TableItem extends React.Component {
 renderSwitch(param) {
  switch(param) {
    case 'Robert Johnstons':
      return a;
  case 'Anna Atkinsone':
      return b;
     case 'Mark Atkinson':
      return c;   
         
    default:
      return a;
  }
}
state(p){
  switch(p) {
    case 'active':
      return active;

    default:
      return pause;
  }

}
 
    render() {


  
  return (
      <div>
 <div className='table-entry'>
     
 <div className='t-name a'>
     <img  src={this.renderSwitch(this.props.name)} ></img>
   <h5 className='uname'>{this.props.name}</h5>
 </div>

 <img className='status b' src={this.state(this.props.status)} ></img>
 
 <div className='t-span c'>
     <h5 className='t-a'>
         {this.props.users}
     </h5>
        <h6 className='t-b'>
        Total Users
     </h6>

 </div>

 <div className='t-span d'>
     <h5 className='t-a'>
         {this.props.impressions}
     </h5>
        <h6 className='t-b'>
       Total Impressions
     </h6>

 </div>

  <div className='t-span e'>
     <h5 className='t-a'>
         {this.props.conversion}
     </h5>
        <h6 className='t-b'>
       Converted Users
     </h6>

 </div>


 

  <img className='dots' src={dotsicon} ></img>
    
      </div>

 
</div>


  );
        

}
}


