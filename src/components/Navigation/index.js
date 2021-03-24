import { useState } from 'react';
import { Link } from "react-router-dom";
import { uuid } from 'uuidv4';

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
      <div>
        {navBars.map(nav => {
          return <Link key={uuid()} to={`/${nav.id}`}>{nav.value}</Link>
        })}
      </div>
    )
}
export default  Navigation;

