import React from 'react';
import imgs from '../../../assests/images/jeganlogo.png';
import sty from './header.module.css';
import {Link} from "react-router-dom";


function header() 
{
    return (
      <div>
        <img className={sty.img} src={imgs}></img>
        <p className={sty.p1}> <span className={sty.p2}>HOTEL SUPER FIVE</span> </p>
        <button className={sty.button1}><Link to="/form"> BOOK NOW </Link></button>
     </div>
    );
}

export default header;