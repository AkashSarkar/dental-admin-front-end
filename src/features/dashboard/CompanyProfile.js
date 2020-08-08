import React, { useState } from 'react';
import {
  Spinner,
  Button, Card, CardBody, Col, Container, FormGroup, Row
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import user1 from '../../images/users/user-1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config';
import { postCompanyProfileThunk } from './DashboardSlice';

const CompanyProfile = () => {
  const dispatch = useDispatch()
  const companyProfile = useSelector(state => state.dashboard.companyProfile);
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const isErrors = useSelector(state => state.dashboard.isErrors);
  const [name, setName] = useState(companyProfile.name || '')
  const [email, setEmail] = useState(companyProfile.email || '')
  const [address, setAddress] = useState(companyProfile.address || '')
  const [logo, setLogo] = useState(companyProfile.logo || user1)
  const [header_number, setHeader_number] = useState(companyProfile.header_number || '')
  const [footer_number, setFooter_number] = useState(companyProfile.footer_number || '')

  const onFileChange = (e) => {
    setLogo(e.target.files[0])
  }
  const onSubmit = (e) => {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('address', address);
    data.append('logo', logo);
    data.append('header_number', header_number);
    data.append('footer_number', footer_number);
    dispatch(postCompanyProfileThunk(data));
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
                    <AvField
                      name="username"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      name="email"
                      label="E-Mail  "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Valid Email"
                      type="email"
                      errorMessage="Invalid Email"
                      validate={{ required: { value: true }, email: { value: true } }}
                    />
                    <AvField
                      name="address"
                      label="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      type="text"
                      errorMessage="Enter Address"
                      validate={{ required: { value: true } }}
                    />
                    <Row>
                      <Col lg={2}>
                        <div>
                          <strong className='mr-lg-4'>Logo</strong>
                          <img src={`${API_URL}${logo}`} alt='logo' height={40} />
                        </div>
                      </Col>
                      <Col lg={10}>
                        <AvField
                          name='logo'
                          onChange={onFileChange}
                          type='file'
                        />
                      </Col>
                    </Row>

                    <AvField
                      name="header_number"
                      label="Header Number  "
                      placeholder="Enter header number"
                      value={header_number}
                      onChange={(e) => setHeader_number(e.target.value)}
                      type="number"
                      errorMessage="Enter Only Number"
                      validate={{
                        required: { value: true },
                        pattern: { value: '^[0-9]+$', errorMessage: 'Only Numbers' }
                      }}
                    />
                    <AvField
                      name="footer_number"
                      label="Footer Number  "
                      placeholder="Enter footer number"
                      value={footer_number}
                      onChange={(e) => setFooter_number(e.target.value)}
                      type="number"
                      errorMessage="Enter Only Number"
                      validate={{
                        required: { value: true },
                        pattern: { value: '^[0-9]+$', errorMessage: 'Only Numbers' }
                      }}
                    />
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

export default CompanyProfile;
