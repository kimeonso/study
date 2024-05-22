import React, { useState } from 'react';

function BudgetForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && cost.trim() !== '') {
      onAddItem({ name, cost: Number(cost) });
      setName('');
      setCost('');
    } else {
      alert('Please enter both a name and a cost.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default BudgetForm;
