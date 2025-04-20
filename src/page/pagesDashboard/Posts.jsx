import React, { useEffect, useState } from 'react';
import SideBar from '../../Components/sideBar';
import { Button, Table, Spinner, Alert, Modal } from 'react-bootstrap';
import { arrayUnion, collection, deleteDoc, doc, getDocs, updateDoc,Timestamp  } from 'firebase/firestore';
import db from '../../firebaseconfig';
import { useSelector } from 'react-redux';
import { FiTrash2, FiEdit, FiEye, FiAlignRight, FiArrowRight, FiCornerRightUp, FiCheck ,FiToggleRight } from 'react-icons/fi';
const Posts = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const UserDashboard = useSelector((state) => state.UserDashboard.value);
    const handleShowImages = (images) => {
        setSelectedImages(images);
        setShowModal(true);
      };
    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const querySnapshot = await getDocs(collection(db, "housing"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        } catch (err) {
            console.error("Error fetching posts: ", err);
            setError("Failed to load posts. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const confirmDelete = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };
    const confirmAccept = async (post) => {
        console.log(post.id);
        console.log(post.Id);
        const time = new Date().toLocaleString('ar-EG', {
            dateStyle: 'short',
            timeStyle: 'short',
          })
          
        
        
        try {
            const housingDocRef = doc(db, "user", post.Id);
            await updateDoc(housingDocRef, {
              Notifications: arrayUnion(`Your post ${post.description} has been accepted.
in ${time}`)
            });
          const postRef = doc(db, 'housing', post.id); // تأكد إن post.id هو الـ Document ID
          await updateDoc(postRef, {
            status: 'accepted', // غيّر المفتاح والقيمة حسب اللي عايز تعدله
          });
          alert('Post accepted!');
        } catch (error) {
          alert('Error updating post:', error);
        }
      };

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "housing", postToDelete.id));
            setPosts(posts.filter(post => post.id !== postToDelete.id));
            setShowDeleteModal(false);
        } catch (err) {
            console.error("Error deleting post: ", err);
            setError("Failed to delete post. Please try again.");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="posts-container">
            <SideBar />
            <main className="posts-content">
                <div className="content-header">
                    <h2>Property Listings</h2>
                    <div className="header-actions">
                        <Button variant="primary" size="sm">Export Data</Button>
                    </div>
                </div>

                {error && (
                    <Alert variant="danger" className="mt-3">{error}</Alert>
                )}

                {loading ? (
                    <div className="loading-spinner">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <div className="posts-table-container">
                        <Table striped bordered hover responsive className="posts-table">
                            <thead className="table-header">
                                <tr>
                                    <th>#</th>
                                    <th>Property</th>
                                    <th>Location</th>
                                    <th>Images</th>
                                    <th>Details</th>
                                    <th>Rooms</th>
                                    <th>Bathrooms</th>
                                    <th>Contact</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    {UserDashboard?.status === "admin" && <th>Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {posts.length > 0 ? (
                                    posts.map((post, index) => (
                                        <tr key={post.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="property-info">
                                                    <div className="property-title">{post.username || 'N/A'}</div>
                                                    <div className="property-description">
                                                        {post.description?.substring(0, 50)}{post.description?.length > 50 ? '...' : ''}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{post.address || 'N/A'}</td>
                                            <td>
                                            <i
                  className="fas fa-folder-open"
                  style={{ fontSize: '20px', cursor: 'pointer', color: '#007bff' }}
                  onClick={() => handleShowImages(post.Images)}
                ></i>
      </td>

      {/* Modal */}
       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>صور الإعلان</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap gap-2">
            {selectedImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`image-${idx}`}
                style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
                                            <td>{post.description?.substring(0, 30)}{post.description?.length > 30 ? '...' : ''}</td>
                                            <td>{post.numbed || 'N/A'}</td>
                                            <td>{post.numteu || 'N/A'}</td>
                                            <td>
                                                <div className="contact-info">
                                                    <div>Phone: {post.phone || 'N/A'}</div>
                                                    <div>WhatsApp: {post.whats || 'N/A'}</div>
                                                </div>
                                            </td>
                                            <td className="price-cell">
                                                {post.price ? `$${post.price}` : 'N/A'}
                                            </td>
                                            <td className="statue">
                                                {post.status || 'N/A'}
                                            </td>
                                            {UserDashboard?.status === "admin" && (
                                                <td className="actions-cell">
                                                    
                                                   {post.status=="pending" && <Button variant="outline-success" title="Accept" size="sm" className="action-btn"
                                                     onClick={() => confirmAccept(post)}
                                                    >
                                                        <FiCheck />
                                                    </Button>}
                                                    <Button title="Delete"
                                                        variant="outline-danger" 
                                                        size="sm" 
                                                        className="action-btn"
                                                        onClick={() => confirmDelete(post)}
                                                    >
                                                        <FiTrash2 />
                                                    </Button>
                                                </td>
                                            )}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={UserDashboard?.status === "admin" ? 9 : 8} className="text-center">
                                            No properties found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                )}
            </main>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this property listing?
                    <div className="mt-2">
                        <strong>Property:</strong> {postToDelete?.username || 'N/A'}
                    </div>
                    <div>
                        <strong>Location:</strong> {postToDelete?.address || 'N/A'}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

            <style>{`
                .posts-container {
                    display: flex;
                    min-height: 100vh;
                    background-color: #f8f9fa;
                }
                .posts-content {
                    flex: 1;
                    padding: 2rem;
                    margin-left: 260px; /* Should match your sidebar width */
                    transition: all 0.3s ease;
                }
                .content-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #e0e0e0;
                }
                .content-header h2 {
                    color: #2c3e50;
                    font-weight: 600;
                    margin: 0;
                }
                .posts-table-container {
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .posts-table {
                    margin-bottom: 0;
                }
                .table-header {
                    background-color: #4361ee;
                    color: white;
                }
                .table-header th {
                    font-weight: 500;
                    padding: 12px 15px;
                }
                .posts-table td {
                    padding: 12px 15px;
                    vertical-align: middle;
                }
                .property-info {
                    max-width: 200px;
                }
                .property-title {
                    font-weight: 500;
                    color: #2c3e50;
                }
                .property-description {
                    font-size: 0.85rem;
                    color: #6c757d;
                }
                .contact-info {
                    font-size: 0.9rem;
                    line-height: 1.4;
                }
                .price-cell {
                    font-weight: 600;
                    color: #2a9d8f;
                }
                .actions-cell {
                    white-space: nowrap;
                }
                .action-btn {
                    margin-right: 5px;
                    padding: 5px 8px;
                }
                .action-btn svg {
                    margin-bottom: 2px;
                }
                .loading-spinner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 200px;
                }
                /* Responsive adjustments */
                @media (max-width: 992px) {
                    .posts-content {
                        margin-left: 0;
                        padding: 1rem;
                    }
                    .posts-table {
                        font-size: 0.9rem;
                    }
                    .table-header th, 
                    .posts-table td {
                        padding: 8px 10px;
                    }
                }
                @media (max-width: 768px) {
                    .content-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    .property-info,
                    .contact-info {
                        max-width: 150px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            `}</style>
        </div>
    );
};

export default Posts;