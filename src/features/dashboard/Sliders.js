import React from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Row, Spinner } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { API_URL } from '../../config';

const Sliders = () => {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h2 className="page-title">Sliders</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Sliders;
