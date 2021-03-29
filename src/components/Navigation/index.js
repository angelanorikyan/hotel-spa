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

  useEffect(() => {
    setActiveTab(history.location.pathname.slice(1))
  })

  return (
    <div className='navbar'>
      <div className='navContainer'>
      {navBars.map(nav => {
        return <div 
          className='tabsWrapper'
          key={nav.id}>
          <Link className={`tabs ${activeTab === nav.id ? 'active' : ''}`} key={nav.id} to={`/${nav.id}`}>{nav.value}</Link>
          </div>
        })}
      </div>
    </div>
  )
}
export default  Navigation;

