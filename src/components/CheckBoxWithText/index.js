import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default function CheckBoxWithText({ type }) {
  return (
    <FormGroup check>
      <Input id="checkbox" name="check" type="checkbox" />
      <Label check for="checkbox">
        {type === "signup" && (
          <>
            I agree to{" "}
            <a className="link_form" href="http://www.nexlesoft.com">
              privacy policy & terms
            </a>
          </>
        )}
        {type === "login" && "Remember Me"}
      </Label>
    </FormGroup>
  );
}
