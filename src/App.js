import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let storeList=JSON.parse(localStorage.getItem("Min Lista"))

  // if(storeList==null) {
  //   storeList=[]
  // }

  const [items, setItems] = useState(storeList)
  const [addText, setAddText] = useState("");

  const saveList = () => {
    setTimeout(() => {
      console.log("här är listan", items)
      localStorage.setItem("Min Lista", JSON.stringify(items))
    }, 2000)
  }

  return (
    <div className="App">
      <h1>Nästan funktionell lista</h1>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input
          value={addText}
          onChange={e => setAddText(e.target.value)}
          placeholder="Add item"
        />

        <button onClick={() => {
          setItems([
            {
              text: addText, 
              done: false
            }, ...items])

          setAddText("")
          saveList()
        }}>Add</button>
      </form>
        
      {items.length?
        items.map((currentItem, currentIndex) => {
          return (
            <div className="item">
              <div>
                <input 
                  type="checkbox" 
                  onChange={(e) => {
                    setItems(items.map((sak, index) => {
                      if (currentIndex==index) {
                        return {...sak, done: e.target.checked}
                      } else {
                        return sak
                      }
                    }))

                    saveList()
                    
                  }} 
                  checked={currentItem.done}
                />

                <p>{currentItem.text}</p>
              </div>


              <button onClick={() => {
                setItems(items.filter((item, i)=>{
                  if(i==currentIndex) {
                    return false
                  }else {
                    return true
                  }
  
                }))

                saveList()
             
              }}>Remove Item</button>
            </div>
          );
        })
        :
        <p>The list is empty!</p>
      }

      
      {}

    </div>
  );
}


export default App;
