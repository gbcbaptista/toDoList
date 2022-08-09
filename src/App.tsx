import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Buy bread', done: false},
    {id: 2, name: 'Buy a cake', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: newList.length+1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleChangeStatus = (clickedItem: Item) => {
    let newList = [...list];
    newList.forEach((item, index) => {
      if (item.id === clickedItem.id) {
        item.done =!item.done
      }
    })
    setList(newList);
  }

  const handleDeleteItem = (deleteItem: Item) => {
    let newList = [...list];
    newList.forEach((item, index) => {
      if (item.id === deleteItem.id) {
        newList.splice(newList.indexOf(deleteItem), 1)
      }
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
      
        <AddArea 
          onEnter={handleAddTask}
        />
      
      {list.map((item, index)=>(
        <ListItem 
          key={index} 
          item={item}
          onClickStatusChange={handleChangeStatus}
          onDeleteClick={handleDeleteItem}
        />
      ))}
      </C.Area>
    </C.Container>
  );
}
export default App;