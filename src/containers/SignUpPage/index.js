import "../../styles.css";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { signUp } from "../../actions";

import CheckBoxWithText from "../../components/CheckBoxWithText";
import PurpleButtonSubmit from "../../components/PurpleButtonSubmit";
import CommonLayout from "../../components/CommonLayout";
import FooterForm from "../../components/FooterForm";
import signup_img from "../../images/signup_img.svg";

function SignUpPage(props) {
  const { account, onSignUp } = props;
  console.log("account", account);
  return (
    <CommonLayout
      background={signup_img}
      content={
        <div className="text_form py-0 px-3">
          <h5>Adventure starts here</h5>
          <p>Make you app management easy for fun!</p>
          <Form>
            {/* Input first name */}
            <FormGroup>
              <Label for="firstName" className="label_form">
                Firstname
              </Label>
              <Input
                required
                id="firstName"
                name="Firstname"
                placeholder="Enter your first name"
                type="text"
              />
            </FormGroup>
            {/* Input last name */}
            <FormGroup>
              <Label for="lastName" className="label_form">
                Lastname
              </Label>
              <Input
                required
                id="lastName"
                name="Lastname"
                placeholder="Enter your last name"
                type="text"
              />
            </FormGroup>
            {/* Input email */}
            <FormGroup>
              <Label for="email" className="label_form">
                Email
              </Label>
              <Input
                required
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            {/* Input Password */}
            <FormGroup>
              <Label for="password" className="label_form">
                Password
              </Label>
              <Input
                required
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
            </FormGroup>
            {/* Checkbox agree policy */}
            <CheckBoxWithText type="signup" />
            <PurpleButtonSubmit
              name="Sign Up"
              btnProps={{
                onClick: () => onSignUp(),
                href: "/dashboard",
              }}
            />
          </Form>
          <FooterForm type="signup" />
        </div>
      }
    />
  );
}

const mapStatetoProps = (state) => {
  return { account: state.data, error: state.error };
};

const mapDispatchprops = (dispatch) => {
  return {
    onSignUp: () => dispatch(signUp()),
  };
};
export default connect(mapStatetoProps, mapDispatchprops)(SignUpPage);
