import ListItem from './ListItem'
const ItemList = ({items,handleClick,handleDelete}) => {
    return(
        <ul>
            {items.map((item)=>(
                <ListItem key = {item.id} item = {item} handleClick={handleClick} handleDelete={handleDelete}/>
            ))}
        </ul>
    );
}

export default ItemList