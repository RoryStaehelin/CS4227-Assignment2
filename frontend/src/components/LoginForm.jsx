import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, role }));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
