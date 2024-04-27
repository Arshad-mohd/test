import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.png';
import './loginStyles.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');
  const [userList, setUserList] = useState([]);
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    if (!isChecked) {
      toast.error('Please agree to the privacy policy');
      return;
    }
  
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsLoggedIn(true);
        setError(null);
        setToken(data.token);
        fetchUserList(data.token);
        toast.success('Successful Login');
      } else {
        setError(data.error || 'Invalid email or password');
        toast.error('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    }
  };

  const fetchUserList = async (token) => {
    try {
      const userListResponse = await fetch('https://reqres.in/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const userListData = await userListResponse.json();

      setUserList(userListData.data);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError(null);
    setToken('');
    setUserList([]);
  };

  return (
    <div className="container">
      {!isLoggedIn && (
        <div className="left-align">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="heading">Hello there, Sign in to continue</h2>
          
        </div>
      )}
      {!isLoggedIn && (
        <div className="form">
          <div className="inputContainer">
            <label className="label">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>
          <div className="checkboxContainer">
            <input 
              type="checkbox" 
              className="checkbox" 
              checked={isChecked}
              onChange={handleCheckboxChange}
            //   onChange={() => setIsChecked(!isChecked)}
            />
            <label className="checkboxLabel">I agree to the privacy policy</label>
          </div>
          <button 
            onClick={handleLogin} 
            className="button"
            disabled={!isChecked} 
            // Disable login button if checkbox is not checked
          >
            Next
          </button>

          <h2 className="ssoHeading" style={{color:"blue"}}>Sign in with company SSO</h2>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <h2>Welcome! You are now logged in.</h2>
          
          <div className="userListContainer">
            <table className="userListTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td><img src={user.avatar} alt={user.first_name} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleLogout} className="logoutButton">Logout</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Login;