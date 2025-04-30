import React, { useState } from 'react';

const Registre = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="login-box bg-black bg-opacity-50 p-10 rounded-xl shadow-xl w-96">
        <h2 className="text-white text-center text-2xl mb-8">Register</h2> 
        <form onSubmit={handleSubmit}>

          <div className="user-box mb-8 relative">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 text-lg outline-none"
            />
            <label className="absolute left-0 top-0 text-white text-lg transition-all duration-500">
              Username
            </label>
          </div>

          <div className="user-box mb-8 relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 text-lg outline-none"
            />
            <label className="absolute left-0 top-0 text-white text-lg transition-all duration-500">
              Password
            </label>
          </div>

          <div className="user-box mb-8 relative">
            <input
              type="password"  
              required
              value={confirmPassword}  
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 text-lg outline-none"
            />
            <label className="absolute left-0 top-0 text-white text-lg transition-all duration-500">
              Confirm Password 
            </label>
          </div>

          <button
            type="submit" 
            className="text-cyan-400 text-lg uppercase inline-block py-2 px-6 mt-10 border-2 border-cyan-400 relative overflow-hidden"
          >
            Submit
            <span className="absolute inset-0 bg-cyan-400 opacity-20"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registre;
