import { useState, useEffect } from 'react';
import { Link, withRouter} from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';
// styles
import './style.scss';

const  Navigation = ({history}) => {
  const [activeTab, setActiveTab] = useState(history.location.pathname.slice(1));
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

  useEffect(() => {
    setActiveTab(history.location.pathname.slice(1))
  })
  console.log(history.location.pathname)
  return (
    <div className='navbar'>
      <div className='navContainer'>
      {navBars.map(nav => {
        return <div 
          className='tabsWrapper'
          key={uuidv4()}>
          <Link 
            key={nav.id}
            className={`tabs ${activeTab === nav.id || (!activeTab &&  nav.id === 'tab1') ? 'active' : ''}`} 
            to={`/${nav.id}`}>
              {nav.value}
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default withRouter(Navigation);
