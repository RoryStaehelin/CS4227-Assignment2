import React from "react";

function AdminPanel() {
  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px 0" }}>
      <h3>Admin Panel</h3>
      <p>This section is only visible to admin users.</p>
      {}
    </div>
  );
}

export default AdminPanel;
