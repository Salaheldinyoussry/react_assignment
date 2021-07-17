import "./menu.css";

import "bootstrap/dist/css/bootstrap.min.css";
import drafts from './images/drafts.png'
import fav from './images/fav.png'
import inbox from './images/inbox.png'
import set from './images/set.png'
import ana from './images/rec.png'
import send from './images/send.png'

import rec from './images/rec.png'

import { Button, Container, Row, Col, Image } from "react-bootstrap";

import React from "react";



export class Menue extends React.Component {
 render() {
  
  return (
    <div className='menue'>
     <a className="link" href="#">
                          <img className='icon' src={inbox} alt="My profile"></img>
               Inbox
            </a>

    <a className="link" href="#">
                          <img className='icon' src={send} alt="My profile"></img>
               Sent
            </a>

                <a className="link" href="#">
                          <img className='icon' src={drafts} alt="My profile"></img>
               Drafts
            </a>

                <a className="link" href="#">
                          <img className='icon' src={rec} alt="My profile"></img>
               Deleted
            </a>

                <a className="link" href="#">
                          <img className='icon' src={fav} alt="My profile"></img>
               Favourite
            </a>

                <a className="link" href="#">
                          <img className='icon' src={ana} alt="My profile"></img>
               Analytics
            </a>

            

                <a className="link" href="#">
                          <img className='icon' src={set} alt="My profile"></img>
               Settings
            </a>
</div>



  );
        

}
}


