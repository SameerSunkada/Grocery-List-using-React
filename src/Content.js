import ItemList from './itemList';

const Content = ({setItems,items,handleCheck,handleDelete}) => {

    return (
        <>
            {items.length ? 
                <ItemList items = {items} handleCheck = {handleCheck} handleDelete = {handleDelete} /> 
                : (
                    <p style={{marginTop : '2rem'}}>List is empty</p>
                )
            
            }
        </>
    );
}

export default Content;