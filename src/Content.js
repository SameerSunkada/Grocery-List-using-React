import ItemList from './itemList';

const Content = ({setItems,items,handleClick,handleDelete}) => {

    return (
        <main>
            {items.length ? 
                <ItemList items = {items} handleClick = {handleClick} handleDelete = {handleDelete} /> 
                : (
                    <p style={{marginTop : '2rem'}}>List is empty</p>
                )
            
            }
        </main>
    );
}

export default Content;