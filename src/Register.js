import React, { useState, useEffect } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  console.log(firstName, password);

  return (
    <div>
      Rigester
      <form>
        first name:
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Register;
