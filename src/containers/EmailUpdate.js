import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import "./EmailUpdate.css";
export default function EmailUpdate() {
  const history = useHistory();
  const [newEmail, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return newEmail.length > 0;
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { "email": newEmail });
      setIsLoading(false);
      history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }
  return (
    <div className="EmailChange">
        <h2 className="text-center">Update Email</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
          <Form.Label>Enter your new Email: </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <LoaderButton
          block
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Update Email
        </LoaderButton>
      </Form>
    </div>
  );
}
