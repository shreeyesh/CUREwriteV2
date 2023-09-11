import React, { useState, useEffect } from 'react';
import LoginPopup from "../components/LoginPopup";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const backendURL = process.env.REACT_APP_BACKEND_URL;



function Dashboard() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [currentRejectId, setCurrentRejectId] = useState(null);
    const [reviewComments, setReviewComments] = useState({}); // Updated this state to be an object
    const [username,setUsername] = useState(null)
    const [decoded,setDecoded] = useState(null)
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [profile,setProfile] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [role,setRole] = useState(null);

    // Verify login using token
   useEffect(() =>{
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    if(!token){
      setLoginPopupOpen(true);
    }
    else{
        if (!role || role==='user'){
            alert("role not there")
            navigate('/login-account-roles')
        } else {
        setRole(role);
        setIsLoggedIn(true);
        }
      const decoded = jwt_decode(token);
      if (username) {
        setUsername(username);
        {setLoginPopupOpen}(true)
      } 
      setDecoded(decoded);
      if(!decoded){
        localStorage.removeItem('token')
        setLoginPopupOpen(true);
        navigate('/login-account-roles')
        }else{
          setProfile(decoded.email)
        }
      }
  },[])
    
    const postApprove = async (id) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      }
      const approved = await fetch(`${backendURL}/approve-post/${id}`, requestOptions);
      alert("Approved post!")
    }
  
    const startRejectProcess = (id) => {
      setCurrentRejectId(id);
    }
  
    const submitReject = async () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ comment: reviewComments[currentRejectId] }),
      }
      const rejected = await fetch(`${backendURL}/reject-post/${currentRejectId}`, requestOptions);
      setCurrentRejectId(null);
    }

    const Logout = async () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        setLoginPopupOpen(true);
        navigate('/login-account-roles')
    }
  
    useEffect(() => {
      fetch(`${backendURL}/posts-for-review`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error("Error fetching posts for review:", error));
    }, [postApprove]);

  return (
      <div className="dashboard">
        <LoginPopup isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} />
      <h1>Posts for Review</h1>
      <h2> Logged in as {username} as {role}</h2>
      <button className='cursor-pointer' onClick={()=>Logout()}> Log out </button>
      {isLoggedIn ?
      <table>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Creator</th>
            <th>Abstract</th>
            <th>Image</th>
            <th>PDF</th>
            <th>Category</th>
            <th>Review Status</th>
            <th>Actions</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post._id}>
              <td>{post.heading}</td>
              <td>{post.username}</td>
              <td>{post.abstract}</td>
              <td>{post.image}</td>
              <td>{post.pdf}</td>
              <td>{post.category}</td>
              <td>{post.review}</td>
              <td>
              <button className='cursor-pointer' onClick={() => postApprove(post._id)}>Approve</button>
                <button className='cursor-pointer' onClick={() => startRejectProcess(post._id)}>Reject</button>
                {currentRejectId === post._id && (
                  <div>
                    <input 
                      type="text" 
                      value={reviewComments[post._id] || ''} // Get the comment based on the post ID
                      onChange={e => setReviewComments({ ...reviewComments, [post._id]: e.target.value })} // Set the comment for the post ID
                      placeholder="Enter review comments"
                    />
                    <button className='cursor-pointer' onClick={submitReject}>Submit</button>
                  </div>
                )}
              </td>
              <td>{reviewComments[post._id] || 'No comments'}</td> {/* Display the comment based on the post ID */}
            </tr>
          ))}
        </tbody>
      </table> : null
}
    </div>
  );
}

export default Dashboard;
