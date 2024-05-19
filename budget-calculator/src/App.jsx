import React, { useState } from 'react';
import './App.css';
import BudgetItem from './components/BudgetItem';
import BudgetForm from './components/BudgetForm';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, idx) => idx !== index));
  };

  const handleEditItem = (index, updatedItem) => {
    const updatedItems = items.map((item, idx) =>
      idx === index ? updatedItem : item
    );
    setItems(updatedItems);
  };

  const totalCost = items.reduce((total, item) => total + item.cost, 0);

  return (
    <div>
      <h1>💸Budget Calculator</h1>
      <BudgetForm onAddItem={handleAddItem} />
      {items.map((item, index) => (
        <BudgetItem
          key={index}
          item={item}
          onDelete={() => handleDeleteItem(index)}
          onEdit={(updatedItem) => handleEditItem(index, updatedItem)}
        />
      ))}
      <div>Total Cost: {totalCost} ₩</div>
    </div>
  );
}

export default App;
