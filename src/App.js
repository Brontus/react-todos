import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Button from "./Button"
import Checkbox from "./Checkbox"

function App() {
  let storeList = JSON.parse(localStorage.getItem("Min Lista"))

  // if(storeList==null) {
  //   storeList=[]
  // }

  const [items, setItems] = useState(storeList)
  const [addText, setAddText] = useState("")

  const saveList = () => {
    setTimeout(() => {
      console.log("här är listan", items)
      localStorage.setItem("Min Lista", JSON.stringify(items))
    }, 2000)
  }

  return (
    <div className="App">
      <h1>Nästan funktionell lista</h1>

      <form onSubmit={e => e.preventDefault()}>
        <input
          value={addText}
          onChange={e => setAddText(e.target.value)}
          placeholder="Add item"
        />

        <Button
          onClick={() => {
            setItems([
              {
                text: addText,
                done: false
              },
              ...items
            ])

            setAddText("")
            saveList()
          }}
          text="Add"
        />
      </form>

      {items.length ? (
        items.map((currentItem, currentIndex) => {
          return (
            <div className="item">
              <div>
                <Checkbox
                  checked={currentItem.done}
                  onChange={value => {
                    setItems(
                      items.map((sak, index) => {
                        if (currentIndex == index) {
                          return { ...sak, done: value }
                        } else {
                          return sak
                        }
                      })
                    )

                    saveList()
                  }}
                />

                <p>{currentItem.text}</p>
              </div>

              <Button
                onClick={() => {
                  setItems(
                    items.filter((item, i) => {
                      if (i == currentIndex) {
                        return false
                      } else {
                        return true
                      }
                    })
                  )

                  saveList()
                }}
                text="Remove Item"
              />
            </div>
          )
        })
      ) : (
        <p>The list is empty!</p>
      )}

      {}
    </div>
  )
}

export default App
