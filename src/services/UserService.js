import axios from "axios";


const API_URL = 'https://66f67d4a436827ced97757d7.mockapi.io/users';

console.log(API_URL);

// Get all users
const getUsers = () => axios.get(API_URL);

// Create a new user
const createUser = (user) => axios.post(API_URL, user);

// Update a user
const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);

// Delete a user
const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

export { getUsers, createUser, updateUser, deleteUser };
