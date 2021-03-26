import './style.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";

const  Navigation = () => {
  const [navBars] = useState([
    { 
      value: 'Tab 1',
      id: 'tab1' ,
    },
    { 
      value: 'Tab 2',
      id: 'tab2',
    }
  ]);

    return (
      <div id='navbar'>
        {navBars.map(nav => {
          return <Link key={nav.id} to={`/${nav.id}`}>{nav.value}</Link>
        })}
      </div>
    )
}
export default  Navigation;

