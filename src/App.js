import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let storeList=JSON.parse(localStorage.getItem("Min Lista"))

  if(storeList==null) {
    storeList=[]
  }

  const [items, setItems] = useState(storeList)
  const [addText, setAddText] = useState("");

  return (
    <div className="App">
      <h1>Lista </h1>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input
          value={addText}
          onChange={e => setAddText(e.target.value)}
          placeholder="Add item"
        />

        <button onClick={() => {
          setItems([addText, ...items])
          setAddText("")
          localStorage.setItem("Min Lista", JSON.stringify([addText, ...items]))
        }}>Add</button>
      </form>

      {items.length?
        items.map((item, currentIndex) => {
          return (
            <div className="item">
              <p>{item}</p>
  
              <button onClick={() => {
                setItems(items.filter((item, i)=>{
                  if(i==currentIndex) {
                    return false
                  }else {
                    return true
                  }
  
                }))
                localStorage.setItem("Min Lista", JSON.stringify(items.filter((item, i)=>{
                  if(i==currentIndex) {
                    return false
                  }else {
                    return true
                  }
  
                })))
  
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
