import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Row, Spinner } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useHistory } from 'react-router-dom'
import user1 from '../../../images/users/user-1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { postSlidersThunk } from '../DashboardSlice';

const AddSlider = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const isErrors = useSelector(state => state.dashboard.isErrors);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [logo, setLogo] = useState(null)

  const onFileChange = (e) => {
    setLogo(e.target.files[0])
  }
  const onSubmit = (e) => {
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('img', logo);
    data.append('status', status);
    dispatch(postSlidersThunk(data, history));
  }
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h2 className="page-title">Company Profile</h2>
            </Col>
          </Row>
        </div>
        {!isLoading ? (
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <AvForm onValidSubmit={onSubmit}>
                    <Row>
                      <Col lg={1}>
                        <div>
                          <strong className='mr-lg-4'>Image</strong>
                        </div>
                      </Col>
                      <Col lg={11}>
                        <AvField
                          name='image'
                          onChange={onFileChange}
                          type='file'
                        />
                      </Col>
                    </Row>

                    <AvField
                      name="title"
                      label="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="title"
                      type="text"
                      errorMessage="Enter title"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      name="description"
                      label="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Address"
                      type="text"
                      errorMessage="Enter description"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      type="select"
                      name="status"
                      label="Status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      validate={{ required: { value: true } }}
                    >
                      <option value="" disabled>Select one</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </AvField>


                    {isErrors && <div className="alert alert-danger d-flex justify-content-center" role="alert">
                      Something went wrong
                    </div>}
                    <FormGroup className="mb-0">
                      <div>
                        <Button type="submit" color="primary" className="mr-1 float-right">
                          Submit
                        </Button>
                      </div>
                    </FormGroup>
                  </AvForm>

                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </Container>
    </>
  );
};

export default AddSlider;
