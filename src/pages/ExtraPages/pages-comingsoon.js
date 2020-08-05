import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { activateNonAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Countdown from 'react-countdown-now';

//Images
import logo from '../../images/logo-dark.png';

class ComingSoon extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {
        this.props.activateNonAuthLayout();

     
    }


    render() {
        const Completionist = () => <span>You are good to go!</span>;

        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                return <Completionist />;
            } else {
                return <div className="counter-number">
                    <div className="coming-box">144
                        <span>Days</span>
                    </div>
                    <div className="coming-box">{hours}
                        <span>Hours</span>
                    </div>
                    <div className="coming-box">{minutes}
                        <span>Minutes</span>
                    </div>
                    <div className="coming-box">{seconds}
                        <span>Seconds</span>
                    </div>
                </div>;
            }
        };

        return (
            <React.Fragment>

                <div className="home-btn d-none d-sm-block">
                    <Link to="/dashboard" className="text-dark" ><i className="fas fa-home h2"></i></Link>
                </div>


                <div className="ex-pages">
                    <div className="content-center">
                        <div className="content-desc-center">
                            <Container>
                                <Row>
                                    <Col lg="12">
                                        <div className="home-wrapper text-center">
                                            <img src={logo} alt="logo" height="30" onClick={() => this.props.UpdateLoginAgain()} />
                                            <h3 className="m-t-30">Let's get started with Veltrix</h3>
                                            <p className="mb-5">It will be as simple as Occidental in fact it will be Occidental.</p>

                                            <div className="coming-watch text-center mb-5">
                                                <div className="countdown">
                                                    <Countdown
                                                        date={Date.now() + Date.now()}
                                                        renderer={renderer}
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center coming-soon-search-form pt-3">
                                                <Form action="#">
                                                    <input type="text" placeholder="Enter email address" />
                                                    <Button type="submit" color="primary">Subscribe</Button>
                                                </Form>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

// const mapStatetoProps = state => {
//     return {
//         loginpage: state.ui_red.loginpage
//     };
// }

// const mapDispatchtoProps = dispatch => {
//     return {
//         UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
//         UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
//     };
// }

// export default connect(mapStatetoProps, mapDispatchtoProps)(ComingSoon);


const mapStatetoProps = state => {
    return {
        // loginpage: state.ui_red.loginpage
    };
}
export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(ComingSoon));
