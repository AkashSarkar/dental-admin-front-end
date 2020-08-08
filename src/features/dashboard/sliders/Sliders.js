import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from '../../../components/DataTable';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sliders = () => {
  const tableHeaders = [
    {
      name: "ID",
      value: "id"
    }, {
      name: "Image",
      value: "img"
    }, {
      name: "Title",
      value: "title"
    }, {
      name: "Description",
      value: "description"
    }, {
      name: "Status",
      value: "status"
    }, {
      name: "Actions",
      value: "actions"
    }
  ];
  const sliders = useSelector(state => state.dashboard.sliders)
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h2 className="page-title">Sliders</h2>
            </Col>
            <Col sm="6" className="float-right">
              <div className="float-right d-none d-md-block">
                <Link to="/add-slider" className="btn btn-primary">Add Slider</Link>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={12}>
            <DataTable
              heads={tableHeaders}
              data={sliders}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Sliders;
