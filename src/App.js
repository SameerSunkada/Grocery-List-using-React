// import logo from './logo.svg';
import './App.css';
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

  useEffect(() =>{
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items])

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
    setItems(updatedItems);
  }
  const handleClick = (id) => {
    const listItems = items.map((item) => id === item.id?{...item, checked : !item.checked}:item);
    // setItems(listItems);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!=id);
    setItems(listItems);
  }


  useEffect(() => console.log('load'),[items]);

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
