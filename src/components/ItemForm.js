import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const[category, setItemCategory] = useState("Produce")
  const [name , setItemInput]= useState("")
  // const newItem,  = useState({
  //   id:uuid(), // the `uuid` library can be used to generate a unique id
  //   name: itemInput,
  //   category: itemCategory,
  // });
  function handleItemCategory(e){
    setItemCategory(e.target.value)
    
  }
  function handleInput(e){
    setItemInput(e.target.value)
   
  }
  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    })
  }

  return (
    <form onSubmit={handleSubmit}className="NewItem">
      <label>
        Name:
        <input value={name} onChange={handleInput}type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={category}onChange={handleItemCategory}name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
