import React from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Divider from "../components/Divider";
import {UserSettingsForm} from "../components/UserSettingsForm";
<<<<<<< HEAD
=======

>>>>>>> 4198e6366a0dfac436b037d567b5f9e264d9aa1c

function ProfileSettings() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Profile Settings</h1>
            <Divider />
          </Jumbotron>
          <UserSettingsForm/>
        </Col>
      </Row>
    </Container>
  );
}
export default ProfileSettings;