import {FaTrashAlt} from 'react-icons/fa'

const ListItem = ({item, handleClick, handleDelete}) => {
    return(
        <li className= "item">
            <input 
                type="checkbox" 
                checked = {item.checked}
                onChange={() => handleClick(item.id)}
            />
            <label 
                onDoubleClick={()=>handleClick(item.id)}
                style={(item.checked)?{textDecoration:'line-through'}:null}
            >
                {item.item}
            </label>
            < FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label= {`Delete ${item.item}`}
            />
        </li>
    );
}

export default ListItem