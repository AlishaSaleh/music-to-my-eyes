import React from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ProfilePic from "../components/ProfilePic";
import UserSettingsForm from "../components/UserSettingsForm";

function ProfileSettings() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Profile Settings</h1>
          </Jumbotron>
          <UserSettingsForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileSettings;
