import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Sidebar } from "./components/Sidebar";
import { TableItem } from "./components/TableItem";

import mainline from "./components/images/mainline.svg";
import table from "./components/images/table.svg";
import dotsicon from './components/images/dotsicon.svg'


import { Button, Container, Row, Col, Image } from "react-bootstrap";

function App() {

const ar=[
    {name:'Robert Johnstons',status:'paused',users:"189",impressions:'324234',conversion:'2342'},
    {name:'Anna Atkinsone',status:'active',users:"189",impressions:'324234',conversion:'2342'},
    {name:'Mark Atkinson',status:'active',users:"189",impressions:'324234',conversion:'2342'}

    

];

  return (
    <div className="myapp">
      <Sidebar />
      <div className="main">
      <div className='title'>
        <h1>Overview</h1>
          <img className='dots' src={dotsicon} ></img>
</div>
        <img className="mline" src={mainline} ></img>
        <div className="table">
        <img  src={table} ></img>
      </div>
          <img className='tline' src={mainline}></img>

        <div className="user-table">
          <h3 className='hu'>Users</h3>
          <h3  className='h'>Status</h3>
          <h3 className='h'>Users</h3>

          <h3 className='h'>Impressions</h3>
          <h3 className='he'>Conversion</h3>
        </div>
          <img className='tline' src={mainline}></img>
         
           {ar.map((value, index) => {
        return  <div>
        <TableItem name={value.name} status={value.status} users={value.users}  impressions={value.impressions}  conversion={value.conversion}/>
     <img className='tline' src={mainline}></img>

     </div>
      })}
         
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
      </div>
    </div>
  );
}

export default App;
