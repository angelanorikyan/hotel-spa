import tab1Data from '../../api/tab1Data';
import Box from '../../components/Box/index.js';
import './style.scss';

const Tab1 = () => {
  return (
    <section className='container'>
      <div className='header'>
        <span>HOTEL Mieres del Cam&iacute;n Apartamentos</span>
        <img src='../../assets/imgs/stars.png' alt='4-star'/>
      </div>
      <section className='boxContainer'>
        {tab1Data.map(tab1 => {
        return <Box key={tab1.id} data={tab1}/>
        })}
      </section>
    </section>
  );
}
 
export default Tab1;