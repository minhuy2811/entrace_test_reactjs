import "../../styles.css";

import { Form, FormGroup, Label, Input } from "reactstrap";
import CheckBoxWithText from "../../components/CheckBoxWithText";
import PurpleButtonSubmit from "../../components/PurpleButtonSubmit";
import CommonLayout from "../../components/CommonLayout";
import FooterForm from "../../components/FooterForm";
import signup_img from "../../images/signup_img.svg";

export default function SignUpPage() {
  return (
    <CommonLayout
      background={
        <div className="bg-light">
          <img
            alt="This is signup"
            src={signup_img}
            width="100%"
            height="100%"
          />
        </div>
      }
      content={
        <div className="container_form">
          <h5>Adventure starts here</h5>
          <p>Make you app management easy for fun!</p>
          <Form>
            {/* Input first name */}
            <FormGroup>
              <Label for="firstName" className="label_form">
                Firstname
              </Label>
              <Input
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
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
            </FormGroup>
            {/* Checkbox agree policy */}
            <CheckBoxWithText type="signup" />
            <PurpleButtonSubmit name="Sign Up" />
          </Form>
          <FooterForm type="signup" />
        </div>
      }
    />
  );
}