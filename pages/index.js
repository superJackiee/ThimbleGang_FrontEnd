import React, { Component } from "react";
import { Link } from "../routes";
import { StandardButton, ThimbleGang } from '../components/button';
import { Row, Col } from 'antd';

class CampaignIndex extends Component {
  render() {
    return (
      <div >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="splashpage">
            <div style={{ position: "absolute", marginTop: "318px", marginLeft: '153px', letterSpacing: '4px' }}>
              <ThimbleGang></ThimbleGang>
            </div>
          </div>
        </div>
        <Row style={{ display: "flex" }}>
          <Col span={7} style={{ width: "30%" }}></Col>
          <Col span={10} style={{ width: "40%" }}>
            <StandardButton label="COMING IN OCTOBER" size={54}></StandardButton>
          </Col>
          <Col span={7} style={{ width: "30%" }}></Col>
        </Row>
        <Row style={{ display: "flex", marginTop: "20px", marginBottom: "100px" }}>
          <Col span={7} style={{ width: "30%" }}></Col>
          <Col span={10} style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
            <a href="https://discord.gg/uxMwCEzbrb" style={{ width: "100%", textDecoration: "none" }}>
              <StandardButton label="DISCORD" size={30} />
            </a>
            <a href="https://t.me/thethimblegang" style={{ marginLeft: "20px", width: "100%", textDecoration: "none" }}>
              <StandardButton label="TELEGRAM" size={30} />
            </a>
            <a href="https://twitter.com/thimblegang" style={{ marginLeft: "20px", width: "100%", textDecoration: "none" }}>
              <StandardButton label="TWITTER" size={30} />
            </a>
          </Col>
          <Col span={7} style={{ width: "30%" }}></Col>
        </Row>
      </div>
    );
  }
}

export default CampaignIndex;
