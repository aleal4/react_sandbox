import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { firstName: firstName, password: password };
    setAllUsers({ ...allUsers, newUser });
  };

  const formCleanup = () => {
    setPassword('');
    setFirstName('');
  };

  return (
    <div>
      Rigester
      <form onSubmit={handleSubmit}>
        first name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
