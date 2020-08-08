import React from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deleteSlidersThunk } from '../DashboardSlice';
import MaterialDataTable from '../../../components/MaterialDataTable';
import { API_URL } from '../../../config';

const Sliders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(state => state.dashboard.isFetchSlider)
  const tableHeaders = [
    {
      title: "ID",
      field: "id"
    }, {
      title: "Title",
      field: "title"
    }, {
      title: "Description",
      field: "description"
    }, {
      title: "Status",
      field: "status"
    }
  ];
  const sliders = useSelector(state => state.dashboard.sliders)
  const mapSliders = () => (
    sliders.map((item) => (
      {
        id: item.id,
        img: `${API_URL}${item.img}`,
        title: item.title,
        description: item.description,
        status: item.status,
      }
    ))
  )
  const onEdit = (id) => {
    history.push(`/edit-slider/${id}`)
  }
  const onDelete = (id) => {
    dispatch(deleteSlidersThunk(id))
  }
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
            {isLoading ? (
              <div className='d-flex justify-content-center align-items-center'>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <MaterialDataTable
                heads={tableHeaders}
                data={mapSliders()}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Sliders;
