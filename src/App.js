// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

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
    const updatedItems = [...items,item];
    setItems(updatedItems)
    setNewItem('');
    setAndSaveItems(updatedItems);
  }
  const handleClick = (id) => {
    const listItems = items.map((item) => id === item.id?{...item, checked : !item.checked}:item);
    // setItems(listItems);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!=id);
    setAndSaveItems(listItems);
  }

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
