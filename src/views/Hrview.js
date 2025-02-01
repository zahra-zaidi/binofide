// src/views/AllEmployees.jsx

import React, { useState, useEffect } from 'react';


import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Progress } from 'reactstrap'
import { Card, CardHeader, CardBody, Row, Col, Form, Label, Input, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap"
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus } from 'react-feather'
import { Edit, Delete, Download } from 'react-feather'
import { IconCheck, IconTrash, IconEdit } from "@tabler/icons-react";
import styled from 'styled-components';
import { IconUserCheck, IconClock, IconCalendar, IconBriefcase } from "@tabler/icons-react";
import axios from 'axios';


const CustomButton = styled.button`
  background-color: #0C1539 !important;
  padding: 10px;
  width:200px;
  border-radius:10px!important;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`;


const CustomButton2 = styled.button`
  background-color: #0C1539 !important;
  padding: 10px;
  width:100%;
  border-radius:10px!important;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`;


const Hrview = () => {

  const [selectedRows, setSelectedRows] = useState([]) // To store selected checkboxes
  const [searchValue, setSearchValue] = useState('')

  // ** Sample Data (to be replaced with dynamic data later)
  const data = [
    { task: 'Task 1', updatedBy: 'John Doe', date: '2025-01-30' },
    { task: 'Task 2', updatedBy: 'Jane Smith', date: '2025-01-29' },
    { task: 'Task 3', updatedBy: 'Alex Brown', date: '2025-01-28' },
  ]

  // ** Columns definition
  const columns = [
    {
      name: 'Task',
      selector: row => row.task,
      sortable: true,
    },
    {
      name: 'Updated By',
      selector: row => row.updatedBy,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div>
          <Edit size={20} className='me-2' />
          <Delete size={20} className='me-2 text-danger' />
          <Download size={20} className='me-2' onClick={() => handleDownload(row)} />
        </div>
      ),
    },
  ]

  // ** Handle Search
  const handleFilter = e => {
    const value = e.target.value
    setSearchValue(value)
  }

  // ** Handle Row Selection
  const handleRowSelected = state => {
    setSelectedRows(state.selectedRows)
  }



  // ** State
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }


  const cardData = [
    { time: '24 hrs', detail: 'Sick leave available', fullTime: 'Sick full time', imgSrc: 'https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png', bgColor: '#FF5733', },
    { time: '29 hrs', detail: 'Sick leave available', fullTime: 'Sick full time', imgSrc: 'https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png', bgColor: '#3498DB' },
    { time: '12 hrs', detail: 'Sick leave available', fullTime: 'Sick full time', imgSrc: 'https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png', bgColor: '#FF5733', },
    { time: '40 hrs', detail: 'Sick leave available', fullTime: 'Sick full time', imgSrc: 'https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png', bgColor: '#3498DB' },
  ]




  const dummyData = [
    {
      id: 1,
      image: "https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png", // Replace with dynamic image source
      bgColor: "#FFEB3B",
      date: "Jan 30, 2025",
      hours: "24 hrs",
      text: "Dummy text for column 2",
    },
    {
      id: 2,
      image: "https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png",
      bgColor: "#03A9F4",
      date: "Feb 1, 2025",
      hours: "30 hrs",
      text: "Another dummy text",
    },
    {
      id: 3,
      image: "https://w7.pngwing.com/pngs/745/306/png-transparent-gallery-image-images-photo-picture-pictures-set-app-incredibles-icon-thumbnail.png",
      bgColor: "#4CAF50",
      date: "Feb 3, 2025",
      hours: "12 hrs",
      text: "Some more text here",
    },
  ];


  const tasks = [
    {
      category: "HR",
      items: [
        "Remove from WhatsApp group",
        "Clearance paper",
        "Pledge",
        "Final Statement",
        "Collect ID+ Business Card",
        "Remove from Gosi",
        "Remove Medical Insurance"
      ]
    },
    {
      category: "IT",
      items: [
        "Remove Access",
        "Remove Email",
        "Device Collection"
      ]
    }
  ];

  const attendancecolumns = [
    { name: "Day", selector: row => row.day, sortable: true },
    { name: "Date", selector: row => row.date, sortable: true },
    { name: "Shift", selector: row => row.shift, sortable: true },
    { name: "Check In", selector: row => row.checkIn, sortable: true },
    { name: "Check Out", selector: row => row.checkOut, sortable: true },
    { name: "Total Working Hours", selector: row => row.hours, sortable: true }
  ];

  const attendancedata = [
    { day: "Monday", date: "2024-01-29", shift: "Morning", checkIn: "09:00 AM", checkOut: "05:00 PM", hours: "8h" },
    { day: "Tuesday", date: "2024-01-30", shift: "Morning", checkIn: "09:00 AM", checkOut: "05:00 PM", hours: "8h" },
    { day: "Wednesday", date: "2024-01-31", shift: "Evening", checkIn: "02:00 PM", checkOut: "10:00 PM", hours: "8h" },
    { day: "Thursday", date: "2024-02-01", shift: "Morning", checkIn: "09:00 AM", checkOut: "05:00 PM", hours: "8h" },
    { day: "Friday", date: "2024-02-02", shift: "Morning", checkIn: "09:00 AM", checkOut: "05:00 PM", hours: "8h" },
    { day: "Saturday", date: "2024-02-03", shift: "Night", checkIn: "10:00 PM", checkOut: "06:00 AM", hours: "8h" },
    { day: "Sunday", date: "2024-02-04", shift: "Evening", checkIn: "02:00 PM", checkOut: "10:00 PM", hours: "8h" }
  ];


  const attcardData = [
    { id: 1, icon: <IconUserCheck size={24} />, title: "Attendance %", percentage: "95%", smallPercentage: "+2%", color: "#E5FFF1" },
    { id: 2, icon: <IconClock size={24} />, title: "Punctuality %", percentage: "88%", smallPercentage: "-1%", color: "#FFEEEE" },
    { id: 3, icon: <IconCalendar size={24} />, title: "Leaves %", percentage: "10%", smallPercentage: "+3%", color: "#E5FFF1" },
    { id: 4, icon: <IconBriefcase size={24} />, title: "Overtime %", percentage: "12%", smallPercentage: "-2%", color: "#FFEEEE" }
  ];


  // State to hold dynamic latitude, longitude, and address (optional)
  const [latitude, setLatitude] = useState(40.7128); // Default latitude (New York)
  const [longitude, setLongitude] = useState(-74.0060); // Default longitude (New York)
  const [address, setAddress] = useState('');

  // Handle updating latitude and longitude
  const updateLocation = () => {
    const formattedAddress = address.replace(/\s+/g, '+'); // Replace spaces for URL format
    const mapUrl = `https://www.google.com/maps/embed/v1/place?q=${formattedAddress}&key=YOUR_GOOGLE_MAPS_API_KEY`;

    setLatitude(null); // You can use actual coordinates if you prefer
    setLongitude(null); // You can use actual coordinates if you prefer
  };


  // const [employeeInfo, setEmployeeInfo] = useState(null);

  // useEffect(() => {
  //   axios.get('/api/employee-status')
  //     .then(response => setEmployeeInfo(response.data))
  //     .catch(error => console.error('Error fetching employee info:', error));
  // }, []);

  // // if (!employeeInfo) return <p>Loading...</p>;

  // // Convert time strings to Date objects for progress calculation
  // const shiftStart = new Date(`1970-01-01T${employeeInfo.shiftStart}`);
  // const shiftEnd = new Date(`1970-01-01T${employeeInfo.shiftEnd}`);
  // const currentTime = new Date();

  // // Calculate progress percentage
  // const totalShiftDuration = shiftEnd - shiftStart;
  // const completedShiftDuration = currentTime - shiftStart;
  // const progress = Math.min((completedShiftDuration / totalShiftDuration) * 100, 100);


  return (
    <>
      <div className="p-2 text-white d-flex  align-item-center p-6 rounded-lg w-80" style={{ backgroundColor: "#081438", borderRadius: "30px" }}>

        <img
          src="https://st2.depositphotos.com/1000975/9226/i/450/depositphotos_92268564-stock-photo-arab-man-with-laptop-isolated.jpg"
          alt="Client"
          className=" rounded-full border-4 border-white" style={{
            width: "133px", height: "133px", borderRadius: "200px", marginRight: "20px"
          }}
        />


        <h3 className="mt-4 text-xl font-semibold text-white">John Doe</h3>
      </div>

      <br />

      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Role
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Documents
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Time Off
          </NavLink>
        </NavItem>


        <NavItem>
          <NavLink
            active={active === '5'}
            onClick={() => {
              toggle('5')
            }}
          >
            Offboarding
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === '6'}
            onClick={() => {
              toggle('6')
            }}
          >
            Attendance
          </NavLink>
        </NavItem>

      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <p><strong>Email:</strong> <br /> example@email.com</p>
                  <hr />
                  <p><strong>Hire Date:</strong> <br /> 2023-08-15</p>
                  <hr />
                  <p><strong>Department:</strong> <br /> Engineering</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <h4>Personal Information</h4>

                </CardBody>
              </Card>

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <Row>
                    {/* First Column */}
                    <Col lg="3" md="3" xs="6">
                      <div>
                        <strong>Family Name:</strong><br /> --
                        <br />
                        <strong>Nationality:</strong><br /> --
                        <br />
                        <strong>Religion:</strong><br /> Islam
                        <br />
                        <strong>Qualification:</strong><br /> Graduate
                        <br />
                        <strong>District:</strong><br /> Al - Malaz
                        <br />
                        <strong>Zip Code:</strong><br /> 31241
                        <br />
                        <strong>Home Country Address:</strong><br /> 549 W Airport Rd
                        <br />
                      </div>
                    </Col>

                    {/* Second Column */}
                    <Col lg="3" md="3" xs="6">
                      <div>
                        <strong>First Name:</strong><br /> Muhammad
                        <br />
                        <strong>Name in Arabic:</strong><br /> محمد علي
                        <br />
                        <strong>Marital Status:</strong><br /> Married
                        <br />
                        <strong>Phone:</strong><br /> 1-507-718-9002
                        <br />
                        <strong>Major:</strong><br /> BSCs
                        <br />
                        <strong>Street No:</strong><br /> 911
                        <br />
                        <strong>Additional Number:</strong><br /> 1-507-718-4625
                        <br />
                      </div>
                    </Col>

                    {/* Third Column */}
                    <Col lg="3" md="3" xs="6">
                      <div>
                        <strong>Last Name:</strong><br /> Ali
                        <br />
                        <strong>Date of Birth:</strong><br /> 19-Mar-2002
                        <br />
                        <strong>Gender:</strong><br /> Male
                        <br />
                        <strong>Email:</strong><br /> muhammadrayan2@gmail.com
                        <br />
                        <strong>City:</strong><br /> Riyadh
                        <br />
                        <strong>Building No:</strong><br /> 233
                        <br />
                        <strong>Unit Number:</strong><br /> 18
                        <br />
                      </div>
                    </Col>
                  </Row>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <p><strong>Email:</strong> <br /> example@email.com</p>
                  <hr />
                  <p><strong>Hire Date:</strong> <br /> 2023-08-15</p>
                  <hr />
                  <p><strong>Department:</strong> <br /> Engineering</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <h4>Role</h4>

                </CardBody>
              </Card>

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <Row>
                    {/* First Column */}
                    <Col sm="4">

                      <Label>Company</Label>
                      <Input type="text" defaultValue="BONA FIDE" />

                      <Label>Position in Arabic</Label>
                      <Input type="text" defaultValue="Muhammad" />


                      <Label>Years of Experience</Label>
                      <Input type="number" defaultValue="2" />

                      <Label>Line Manager</Label>
                      <Input type="text" defaultValue="Omer Raza" />

                      <Label>Project Name</Label>
                      <Input type="text" defaultValue="Bona Fide" />

                      <Label>Line Manager Email</Label>
                      <Input type="email" defaultValue="omerraza@gmail.com" />

                    </Col>

                    {/* Second Column */}
                    <Col sm="4">

                      <Label>Department</Label>
                      <Input type="text" defaultValue="DESIGN" />

                      <Label>BONAFIDE ID</Label>
                      <Input type="number" defaultValue="12" />

                      <Label>Grade</Label>
                      <Input type="text" defaultValue="A" />

                      <Label>Employee Status</Label>
                      <Input type="text" defaultValue="Current" />

                      <Label>Employment Start Date</Label>
                      <Input type="date" defaultValue="2024-11-12" />

                      <Label>Employee ID</Label>
                      <Input type="number" defaultValue="23" />

                    </Col>

                    {/* Third Column */}
                    <Col sm="4">

                      <Label>Position in English</Label>
                      <Input type="text" defaultValue="Creative Head" />

                      <Label>CV</Label>
                      <Input type="text" defaultValue="Muhammad" />

                      <Label>Sub-Department</Label>
                      <Input type="text" defaultValue="Art" />

                      <Label>Employment Type</Label>
                      <Input type="text" defaultValue="Permanent" />

                      <Label>Probation Period End Date</Label>
                      <Input type="date" defaultValue="2024-11-12" />

                      <Label>Contract Duration (In Months)</Label>
                      <Input type="number" defaultValue="12" />

                    </Col>
                  </Row>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <p><strong>Email:</strong> <br /> example@email.com</p>
                  <hr />
                  <p><strong>Hire Date:</strong> <br /> 2023-08-15</p>
                  <hr />
                  <p><strong>Department:</strong> <br /> Engineering</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <div className='d-flex align-items-center justify-content-between'>

                    <h4>Documents</h4>
                    <CustomButton>Upload</CustomButton>
                  </div>


                </CardBody>
              </Card>

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <Row>
                    <DataTable
                      noHeader
                      pagination
                      columns={columns}
                      data={data.filter(
                        item =>
                          item.task.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.updatedBy.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.date.toLowerCase().includes(searchValue.toLowerCase())
                      )}
                      paginationPerPage={5}
                      selectableRows
                      selectableRowsComponent="input"
                      onSelectedRowsChange={handleRowSelected}
                      sortIcon={<ChevronDown size={10} />}
                    />
                  </Row>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='4'>
          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <p><strong>Email:</strong> <br /> example@email.com</p>
                  <hr />
                  <p><strong>Hire Date:</strong> <br /> 2023-08-15</p>
                  <hr />
                  <p><strong>Department:</strong> <br /> Engineering</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <div className='d-flex align-items-center justify-content-between'>

                    <h4>Timeoff</h4>

                  </div>


                </CardBody>
              </Card>

              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <Row>

                    {cardData.map((data, index) => (
                      <Col lg="3" md="6" sm="12" key={index}>
                        <div className="mb-3 bg-white shadow p-2 rounded" style={{ boxShadow: "1px 3px 1px #9E9E9E" }}>
                          <CardBody>

                            <div className='d-flex justify-content-between align-item-center'>
                              <h5>{data.time}</h5>


                              <div className="time-container" style={{ position: 'relative', display: 'inline-block' }}>
                                {/* PNG Image with background color */}
                                <div
                                  className="time-image"
                                  style={{
                                    backgroundColor: data.bgColor, // Use dynamic background color from data
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: '-20px', // Adjust the position based on your design
                                    left: '-20px' // Adjust the position based on your design
                                  }}
                                >
                                  {/* PNG Image - dynamic source */}
                                  <img src={data.imgSrc} alt="icon" style={{ width: '20px', height: '20px' }} />
                                </div>

                              </div>
                            </div>



                            <hr />

                            <p>{data.detail}</p>
                            <p>{data.fullTime}</p>
                          </CardBody>
                        </div>
                      </Col>
                    ))}

                  </Row>

                  <Row>

                    <h4> Upcoming Timeoff</h4>
                    <br />
                    <div className="custom-section">
                      {dummyData.map((item) => (
                        <Card key={item.id} className="custom-card">
                          <CardBody className="d-flex justify-content-between align-item-center">

                            <div className="first-col  ">
                              <div className='d-flex'>
                                <div className="image-container ">
                                  <img src={item.image} alt="Avatar" className="avatar me-2" style={{ width: "40px", height: "40px", backgroundColor: item.bgColor }} />
                                </div>
                                <div >
                                  <p className="date">{item.date}</p>

                                  <p className="hours">{item.hours}</p>

                                </div>
                              </div>



                            </div>

                            {/* Second Column */}
                            <div className="second-col">
                              <p className="text">{item.text}</p>
                            </div>

                            {/* Third Column */}
                            <div className="third-col">
                              <IconCheck className="icon check" />
                              <IconEdit className="icon edit" />
                              <IconTrash className="icon delete" />
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>

                  </Row>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId='5'>
          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>
                  <p><strong>Email:</strong> <br /> example@email.com</p>
                  <hr />
                  <p><strong>Hire Date:</strong> <br /> 2023-08-15</p>
                  <hr />
                  <p><strong>Department:</strong> <br /> Engineering</p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">
              <Card className='p-3 bg-white rounded'>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Task</h2>
                  {tasks.map((section, index) => (
                    <div key={index} className="mt-4">
                      <h3 className="text-lg font-semibold">{section.category}</h3>
                      <div className="mt-2 ">
                        <CardBody>
                          {section.items.map((task, idx) => (
                            <div key={idx} className="flex items-center gap-3 border-b py-2">
                              <input type="checkbox" className='me-2' />
                              <span className="flex-1">{task} <span className="text-sm text-gray-500">Omer Raza - Due December 23, 2024</span></span>

                            </div>
                          ))}
                        </CardBody>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId='6'>

          <Row>
            <Col lg="3" md="3" xs="12">
              <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                <CardBody>

                  <Card className=" shadow-lg rounded-xl">
                    <CardBody>
                      {/* Header */}
                      <h5 fontWeight="bold">Employee Status</h5>

                      {/* Date & Time Row */}
                      <div className="flex justify-between items-center mt-2">
                        <div className='d-flex justify-content-between'>


                          <p variant="h6">Today</p>
                          <p className="text-gray-500"> 10-06-2025 hrs
                            {/* {employeeInfo.date} */}
                          </p>

                        </div>
                        <p variant="h6" fontWeight="bold">
                          {/* {employeeInfo.workedHours}  */}
                         Fri 12/4/2024</p>
                      </div>

                      {/* Progress Bar */}
                      <Progress value={70} className="h-2" />

                      {/* Shift Details */}
                      <div className="d-flex justify-content-between align-item-center mt-2">
                        <p variant="body2">Check-In: 8:00 am
                          {/* {employeeInfo.checkInTime} */}
                        </p>
                        <p variant="body2"> 7:00 pm
                          {/* {employeeInfo.shiftEnd} */}
                        </p>
                      </div>
                      <p variant="body2" className="text-center text-gray-500">
                        Shift  10:00am - 7:00pm

                        {/* {employeeInfo.shiftStart} - {employeeInfo.shiftEnd} */}
                      </p>

                      {/* Button */}
                      <CustomButton2 variant="contained" fullWidth className="mt-4">Edit the Shift</CustomButton2>
                    </CardBody>
                  </Card>

                  <div className="location-container text-center">

                    <h2>Location</h2>

                    {/* Google Map */}
                    <div className="map-container mt-2">
                      <iframe
                        width="100%"
                        height="170"
                        frameBorder="0"
                        style={{ border: '0', borderRadius: '10px' }}
                        src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${data.latitude},${data.longitude}&zoom=12`}
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Date & Time Section */}
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <p>Fri , 14,6,2006</p>
                      <p>10:55 am</p>
                      {/* <p className="m-0">{data.date}</p>
                      <p className="m-0">{data.time}</p> */}
                    </div>

                    {/* Button */}
                    <CustomButton2 color="primary" className="mt-3">Expand the Location</CustomButton2>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg="9" md="9" xs="12">
              <Card>
                <Card className="shadow-sm bg-white" style={{ borderRadius: "20px" }}>
                  <CardBody>

                    <h4>Attendance</h4>


                    <Row className="mt-3">
                      {attcardData.map((item) => (
                        <Col lg={3} md={6} sm={12} key={item.id}>
                          <div className="p-1 shadow text-center" style={{ boxShadow: "1px 3px 1px #9E9E9E" }}>
                            <div className="d-flex justify-content-between align-items-center">

                              <div className="icon-box" style={{ backgroundColor: "#FFF2E5", padding: "10px", borderRadius: "40px" }}>{item.icon}</div>
                              {/* <Dropdown>
                                <Dropdown.Toggle variant="light" size="sm" className="border-0">
                                  &#8286;
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>Edit</Dropdown.Item>
                                  <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown> */}
                            </div>

                            <div className='d-flex justify-content-start'>
                              <h6 className="mt-1 ">{item.title}</h6>
                            </div>


                            <div className="d-flex justify-content-between align-items-center gap-2">
                              <h3>{item.percentage}</h3>
                              <span className="small-percentage" style={{ backgroundColor: item.color, padding: "10px", borderRadius: "20px" }}>
                                {item.smallPercentage}
                              </span>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    <div className="container mt-3">
                      <DataTable
                        columns={attendancecolumns}
                        data={attendancedata}
                        pagination
                        highlightOnHover
                      />
                    </div>


                  </CardBody>
                </Card>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

    </>
  );
};

export default Hrview;
