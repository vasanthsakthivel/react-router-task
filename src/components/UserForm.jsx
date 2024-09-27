import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/UserService';




const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await updateUser(editingUser.id, { name, email });
        setEditingUser(null);
      } else {
        await createUser({ name, email });
      }
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error saving user', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingUser ? 'Edit User' : 'Add User'}</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
