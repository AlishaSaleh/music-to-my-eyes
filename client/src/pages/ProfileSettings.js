import React from "react";
import {Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Divider from "../components/Divider";
import {UserSettingsForm} from "../components/UserSettingsForm";


function ProfileSettings() {
  return (
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="header-txt">Profile Settings</h1>
            <Divider />
          </Jumbotron>
          <UserSettingsForm/>
        </Col>
      </Row>
  );
}
export default ProfileSettings;