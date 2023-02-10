import React from "react";
import { Button, FormGroup } from "reactstrap";

export default function PurpleButtonSubmit({ name }) {
  return (
    <FormGroup className="signUpBtn_form">
      <Button block>{name}</Button>
    </FormGroup>
  );
}
