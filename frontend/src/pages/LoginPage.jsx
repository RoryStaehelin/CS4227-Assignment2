import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <Layout>
      <article className="contrast">
        <h2>Login</h2>
        <LoginForm />
      </article>
    </Layout>
  );
}

export default LoginPage;
