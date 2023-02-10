import React, { useState } from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";
import CommonLayout from "../../components/CommonLayout";
import CheckBoxWithText from "../../components/CheckBoxWithText";
import PurpleButtonSubmit from "../../components/PurpleButtonSubmit";
import FooterForm from "../../components/FooterForm";
import login_img from "../../images/login_img.svg";

async function login(credentials) {
  return fetch("http://streaming.nexlesoft.com:4000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginPage({ setToken }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login({
      email,
      password,
    });
    setToken(token);
  };
  return (
    <CommonLayout
      background={login_img}
      content={
        <div className="text_form py-0 px-3">
          <h5>Welcome to Entrance Test Interview! 👋🏻</h5>
          <p>Please sign-in to your account and start the adventure</p>
          <Form onSubmit={handleSubmit}>
            {/* Input email */}
            <FormGroup>
              <Label for="email" className="label_form">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            {/* Input Password */}
            <FormGroup>
              <Label for="password" className="label_form w-100">
                <div className="d-flex justify-content-between">
                  <span>Password</span>
                  <a href=".#" className="link_form">
                    Forgot password?
                  </a>
                </div>
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* Checkbox */}
            <CheckBoxWithText type="login" />
            <PurpleButtonSubmit
              name="Login"
              btnProps={{
                href: "/dashboard",
              }}
            />
          </Form>
          <FooterForm type="login" />
        </div>
      }
    />
  );
}

export default LoginPage;
