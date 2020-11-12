import React from 'react';
import imgs from '../../../assests/images/jeganlogo.png';
import sty from './header.module.css';

function header() 
{
    return (
      <div>
        <img className={sty.img} src={imgs}></img>
        <p className={sty.p1}>HOTEL SUPER FIVE</p>
     </div>
    );
}

export default header;