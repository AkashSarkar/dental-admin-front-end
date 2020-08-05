import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';
import 'fullcalendar/dist/fullcalendar.min.css';

const DefaultEvents = [
    {
        title: 'All Day Event',
        start: new Date().setDate(new Date().getDate() + 1),
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: new Date().setDate(new Date().getDate() - 5),
        allDay: false,
        className: 'bg-teal'
    },
    {
        id: 999,
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() - 3),
        allDay: false,
        className: 'bg-purple'
    },
    {
        id: 999,
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 4),
        allDay: false,
        className: 'bg-warning'
    },
    {
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 4),
        allDay: false,
        className: 'bg-danger'
    },
];

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarWeekends: true,
            calendarEvents: DefaultEvents,
        }
        this.calendarComponentRef = React.createRef();
        this.handleDateClick = this.handleDateClick.bind(this);
    }
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    handleDateClick = (arg) => {
        var title = prompt('Event Title:');
        this.setState({ selectedDay: arg });
        if (title == null) { }
        else {
            var newEvent = {};
            newEvent = {
                id: this.state.calendarEvents.length + 1,
                title: title,
                start: this.state.selectedDay ? this.state.selectedDay.date : new Date(),
                className: 'bg-primary'
            };
            this.setState({
                calendarEvents: this.state.calendarEvents.concat(newEvent),
                selectedDay: null
            });

        }

    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Calendar</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Calendar</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <FullCalendar ref={this.calendarComponentRef} defaultView="dayGridMonth" plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                        slotDuration={'00:15:00'}
                                        minTime={'08:00:00'}
                                        maxTime={'19:00:00'}
                                        handleWindowResize={true}
                                        themeSystem="bootstrap"
                                        header={{
                                            left: 'prev,next today',
                                            center: 'title',
                                            right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                        }}
                                        dateClick={this.handleDateClick}
                                        editable={true}
                                        droppable={true}
                                        eventLimit={true}
                                        selectable={true}
                                        events={this.state.calendarEvents}
                                        id="calendar" />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>

            </React.Fragment >
        )
    }
}

// export default Calendar;

export default withRouter(connect(null, { activateAuthLayout })(Calendar));