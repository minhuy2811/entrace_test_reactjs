import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import CommonLayout from "../../components/CommonLayout";
import CheckBoxWithText from "../../components/CheckBoxWithText";
import PurpleButtonSubmit from "../../components/PurpleButtonSubmit";
import FooterForm from "../../components/FooterForm";
import login_img from "../../images/login_img.svg";

export default function LoginPage() {
  return (
    <CommonLayout
      background={login_img}
      content={
        <div className="container_form">
          <h5>Welcome to Entrance Test Interview! 👋🏻</h5>
          <p>Please sign-in to your account and start the adventure</p>
          <Form>
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
              />
            </FormGroup>
            {/* Checkbox */}
            <CheckBoxWithText type="login" />
            <PurpleButtonSubmit name="Login" />
          </Form>
          <FooterForm type="login" />
        </div>
      }
    />
  );
}
