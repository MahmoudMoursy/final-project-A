import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from '../../firebaseconfig';

function AllUsers() {
  const [usersAdmin, setUsersAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fetch users from Firesto    const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "AdminManagment"));
      const usersData = [];
      
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsersAdmin(usersData);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }setLoading(false);
  };
  // Delete user
  const deleteUser = async (id) => {
    if (confirm('Are you sure you want to save this thing into the database?')) {
        try {
            await deleteDoc(doc(db, "AdminManagment", id));
            setUsers(usersAdmin.filter(user => user.id !== id));
            console.log("User deleted successfully!");    
          } catch (error) {
            console.error("Error deleting user: ", error);
          }
      } else {
        console.log('Thing was not saved to the database.');
      }
  
  };
  const deleteAllUser = async (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteDoc(doc(db, "user", id)); // حذف المستخدم من collection "user"
        setUsers(users.filter(user => user.id !== id));
        console.log("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    } else {
      console.log('User was not deleted.');
    }
  };
  const editUser = async (id) => {
    
        try {
            await updateDoc(doc(db, "AdminManagment", id));
            setUsers(users.filter(user => user.id !== id));
            console.log("User deleted successfully!");    
          } catch (error) {
            console.error("Error deleting user: ", error);
          }
  };

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "user")); // تغيير "AdminManagment" إلى "user"
      const usersData = [];
      
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
    fetchAllUsers();
  }, []);
  
  return (
    <div className="container mt-5" style={{ paddingLeft: '15rem' }}>
      <h2 className="mb-4">Admin & Supervisor</h2>
        {console.log(users)}
        {loading && <p>Loading...</p>}  
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersAdmin.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td >{user.status}</td>
              <td>
                {/* <Button variant="warning"className="me-2"onClick={() =>editUser(user.id)}>
                  Edit
                </Button> */}
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <h2 className="mb-4"> Users</h2>
      {loading && <p>Loading...</p>}
      
      {/* جدول المستخدمين */}
      <Table striped bordered hover className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>UserId</th> */}
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Bio</th>
            <th>City</th>
            <th>Status</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              {/* <td>{user.id}</td> */}
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phonenumber}</td>
              <td>{user.address}</td>
              <td>{user.bio}</td>
              <td>{user.city}</td>
              <td>{user.status}</td>
              <td>{user.university}</td>
              <td>
                <Button variant="danger" onClick={() => deleteAllUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
    </div>
  );
}
export default AllUsers;
