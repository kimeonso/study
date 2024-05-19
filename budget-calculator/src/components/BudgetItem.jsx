import React, { useState } from 'react';

function BudgetItem({ item, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedCost, setEditedCost] = useState(item.cost);

  const handleEdit = () => {
    onEdit({ name: editedName, cost: Number(editedCost) });
    setIsEditing(false);
  };

  return (
    <div className="item">
      {isEditing ? (
        <div className="edit-section">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="number"
            value={editedCost}
            onChange={(e) => setEditedCost(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span>{item.name}</span>
          <span>{item.cost} ₩</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default BudgetItem;
