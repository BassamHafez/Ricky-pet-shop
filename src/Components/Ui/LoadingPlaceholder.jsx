import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Col } from "react-bootstrap";
import styles from './LoadingPlaceholder.module.css';
const LoadingPlaceholder = () => {
  return (
    <Col sm={6} md={4} className="my-5 p-4">
      <Card  style={{ width: "20rem" }}>
        <div className={styles.header_img}></div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button className={styles.btn}  xs={6} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LoadingPlaceholder;
