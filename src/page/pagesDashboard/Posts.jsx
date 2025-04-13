import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/sideBar'
import { Button, Table } from 'react-bootstrap';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import db from '../../firebaseconfig';
import { useSelector } from 'react-redux';

function Posts() {
      const [posts, editPosts ] = useState([]);
    const [loading, setLoading] = useState(false);
    const UserDashboard= useSelector((state) => state.UserDashboard.value); 

    const fetchPosts = async () => {
        setLoading(true);
        try {
          const querySnapshot = await getDocs(collection(db, "housing"));
          const Posts = [];
          
          querySnapshot.forEach((doc) => {
            Posts.push({ id: doc.id, ...doc.data() });
          });
          editPosts(Posts);
          console.log(Posts);
          
        } catch (error) {
          console.error("Error fetching posts: ", error);
        }setLoading(false);
      };
      const deletePost = async (id) => {
        if (confirm('Are you sure you want to save this thing into the database?')) {
            try {
                await deleteDoc(doc(db, "housing", id));
                editPosts(posts.filter(post => post.id !== id));
                console.log("Post deleted successfully!");    
              } catch (error) {
                console.error("Error deleting user: ", error);
              }
          } else {
            console.log('Thing was not saved to the database.');
          }
      
      };
            

       useEffect(() => {
        fetchPosts();
        }, []);
      
  return (
    <div className="dashboard-container">
        <SideBar/>
        <div className="dashboard-main d-flex justify-content-center align-items-center flex-column  bg-light p-4">
                    <h2 className="mb-4">All Posts</h2>
                    {console.log(posts)}
                    {loading && <p>Loading...</p>}  
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>ID</th> */}
                        <th>Username</th>
                        <th>Address</th>
                        <th>description</th>
                        <th>numbed</th>
                        <th>numteu</th>
                        <th>phone</th>
                        <th>whats</th>
                        <th>price</th>
                        { UserDashboard?.status=="admin" && <th>Delete</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.id}>
                        <td>{index + 1}</td>
                        {/* description numbed numteu phone price price */}
                        <td>{post.username}</td>
                        <td>{post.address}</td>
                        <td>{post.description}</td>
                        <td >{post.numbed}</td>
                        <td >{post.numteu}</td>
                        <td >{post.phone}</td>
                        <td >{post.whats}</td>
                        <td >{post.price}</td>
                        { UserDashboard?.status=="admin" && <td>
                            <Button variant="danger" onClick={() => deletePost(post.id)}>
                            Delete
                            </Button>
                        </td>}
                        </tr>
                    ))}
                    </tbody>
                </Table>
      </div>
    </div>
  )
}

export default Posts
