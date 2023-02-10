import React from "react";
import { Button, FormGroup } from "reactstrap";

export default function PurpleButtonSubmit({ name, btnProps }) {
  return (
    <FormGroup className="signUpBtn_form">
      <Button block {...btnProps}>
        {name}
      </Button>
    </FormGroup>
  );
}
