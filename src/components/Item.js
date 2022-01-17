import React, { useState } from "react";

function Item({ name, category }) {

  const [items, setItems] = useState(true)


  function handleClick() {
    setItems((items) => !items)
  }

  const appClass = items ? "" : "in-cart";
  const text = items ? "Add to Cart" : "Remove from Cart"


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{text}</button>
    </li>
  );
}

export default Item;
