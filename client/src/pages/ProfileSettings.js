import React from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Divider from "../components/Divider";
import {UserSettingsForm} from "../components/UserSettingsForm";

function ProfileSettings() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron name="gradient-1">
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
