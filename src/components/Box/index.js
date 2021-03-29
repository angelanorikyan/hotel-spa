import { v4 as uuidv4 } from 'uuid';
// style
import './style.scss';

const Box = ({boxData, onBoxClick, value}) => {
 
  return (
    <div
      className={`boxWrapper ${boxData.id === value ? 'active' : ''}`}
      onClick={() => onBoxClick(boxData)}>
      <div className={`boxTitle ${boxData.id === value ? 'active' : ''}`}>{boxData.title}</div>
      <div className='separator'></div>
      <ul>
        {boxData.include.map(elm =>
        <li key={uuidv4()}>{elm.value}</li>
        )}
      </ul>
      <div className={`radioWrapper ${boxData.id === value ? 'active' : ''}`}>
        <div className={`package ${boxData.id === value ? 'active' : ''}`}>
          <div className='radioButtonWrapper' >
            <input 
              className='radioButton'
              type='radio'
              name={boxData.id} 
              value={boxData.id} 
              checked={boxData.id === value}
              ></input>
             <label htmlFor={boxData.id} > Elegir r&#xE9;gimen</label>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Box;