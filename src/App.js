import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const [checkedItems, setCheckedItems] = useState([]);

  const setAndSaveItems = (newItemsList) =>{
    setItems(newItemsList);
    localStorage.setItem('shoppingList', JSON.stringify(newItemsList));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    const item = {
      id : items.length+1,
      checked: false,
      item : newItem
    }
    const updatedItems = [...items];
    let count = 0;
    for(let i = 0; i<items.length; ++i){
      if(items[i].checked) count++;
    }
    updatedItems.splice(items.length-count,0,item)
    setItems(updatedItems)
    setNewItem('');
    setAndSaveItems(updatedItems);
  }
  const handleClick = (id) => {
    const newListItems = items.filter((item) => id === item.id);
    newListItems[0].checked? newListItems[0].checked = false : newListItems[0].checked = true;
    const listItems = items.filter((item) => id !== item.id);
    if(!newListItems[0].checked){
      let count = 0;
      for(let i = 0; i<items.length; ++i){
        if(items[i].checked) count++;
      }
      listItems.splice(items.length-count-1,0,newListItems[0]);
    }
    else{
      listItems.push(newListItems[0]);
    }
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!==id);
    setAndSaveItems(listItems);
  }

  useEffect(() =>{
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items]);

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        setItems ={setItems} 
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleClick = {handleClick} 
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
