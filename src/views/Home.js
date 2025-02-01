
import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"
import axios from "axios"
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import { Play, DollarSign, HelpCircle, FileText, Archive } from 'react-feather'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PickerInline from "./PickerInline"
import "@styles/react/libs/flatpickr/flatpickr.scss"

const Home = ({ isRtl }) => {
  // ** Static vacation data
  const vacationData = [
    {
      type: "Public Holiday",
      occasion: "Eid",
      from: "Dec 23, 2034",
      to: "Dec 29, 2034",
    },
    {
      type: "Public Holiday",
      occasion: "Eid",
      from: "Dec 23, 2034",
      to: "Dec 29, 2034",
    },
  ];

  // ** State for fetching API data
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("/card/card-analytics/avg-sessions")
      .then((res) => setApiData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ** Chart Configuration
  const options = {
    chart: {
      stacked: true,
      type: "bar",
      toolbar: { show: false },
    },
    grid: {
      padding: {
        top: -20,
        bottom: -10,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    xaxis: {
      categories: ["Sales", "IT", "Marketing", "Legal", "API"], // Categories at the bottom
      labels: {
        style: {
          colors: "#b9b9c3",
          fontSize: "0.86rem",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5, // 5 ticks for 0%, 20%, 40%, 60%, 80%, 100%
      labels: {
        style: {
          colors: "#b9b9c3",
          fontSize: "0.86rem",
        },
        formatter: (value) => `${value}%`, // Percentage labels on Y-axis
      },
    },
    tooltip: {
      enabled: false, // Tooltip disabled to show labels directly
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 8,
        distributed: true,
      },
    },
    colors: ["#0C1539"], // Color for the bars
  };

  // Series data
  const series = [
    {
      name: "Percentage",
      data: [75, 60, 85, 45, 70], // Data corresponding to each category
    },
  ];

  const schedule = [
    {
      day: "Wednesday",
      tasks: [
        { time: "9:30 AM", task: "UI/UX" },
        { time: "10:00 AM", task: "Developer" },
      ],
    },
    {
      day: "Thursday",
      tasks: [
        { time: "9:30 AM", task: "UI/UX" },
        { time: "10:00 AM", task: "Developer" },
      ],
    },
  ];


  const params = {
    className: 'swiper-centered-slides swiper-container p-1',
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    navigation: true,
    slideToClickedSlide: true
  }


  return (
    <div>
      <Row className="match-height">
        <Col lg="8" md="12">
          <Row className="match-height">
            <Col lg="6" md="3" xs="6">
              <Card className="p-2 bg-white" style={{ borderRadius: "40px" }}>
                <h6 className="mb-3">Today's Overview</h6>
                <CardBody>
                  <Row className="text-center">
                    {/* Top Row */}
                    <Col xs="6">
                      <h5 className="mb-0 font-weight-bold">9 : 16 AM</h5>
                      <small className="text-muted">Today's In time</small>
                    </Col>
                    <Col xs="6">
                      <h5 className="mb-0 font-weight-bold">45 m</h5>
                      <small className="text-muted">Break Time*</small>
                    </Col>

                    {/* Horizontal Line */}
                    <Col xs="12" className="my-2">
                      <hr className="m-0" />
                    </Col>

                    {/* Bottom Row */}
                    <Col xs="6">
                      <h5 className="mb-0 font-weight-bold">4 h 23 m</h5>
                      <small className="text-muted">Work Time*</small>
                    </Col>
                    <Col xs="6">
                      <h5 className="mb-0 font-weight-bold">3</h5>
                      <small className="text-muted">Task in Progress</small>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="3" xs="6">
              <Card className="p-2 bg-white" style={{ borderRadius: "40px" }}>
                <h6 className="mb-3">Attendance</h6>
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  height={250}
                />
              </Card>
            </Col>
          </Row>

          <Row>
            <Card className="bg-white" style={{ borderRadius: "40px" }}>
              <CardHeader>
                <h4 className="mb-0">Vacations</h4>
              </CardHeader>
              <CardBody>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th className="text-muted">Type</th>
                      <th className="text-muted">Occasion</th>
                      <th className="text-muted">From</th>
                      <th className="text-muted">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacationData.map((row, index) => (
                      <tr key={index}>
                        <td className="fw-bold">{row.type}</td>
                        <td>{row.occasion}</td>
                        <td>{row.from}</td>
                        <td>{row.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Row>

          <Row>
            <Card className="bg-white" style={{ borderRadius: "40px" }}>
              <CardHeader>
                <h4 className="mb-0">Upcoming Event </h4>
              </CardHeader>
              <CardBody>

                <Swiper
                  dir={isRtl ? 'rtl' : 'ltr'}
                  modules={[]}
                  spaceBetween={10}
                  slidesPerView={1} // Default (Mobile View)
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },  // Tablets
                    768: { slidesPerView: 3, spaceBetween: 15 },  // Small Screens
                    1024: { slidesPerView: 4, spaceBetween: 20 }  // Desktop
                  }}
                >
                  <SwiperSlide className='rounded swiper-shadow'>
                    <Play size={28} />
                    <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Getting Started</p>
                  </SwiperSlide>
                  <SwiperSlide className='rounded swiper-shadow'>
                    <DollarSign size={28} />
                    <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Pricing & Plans</p>
                  </SwiperSlide>
                  <SwiperSlide className='rounded swiper-shadow'>
                    <HelpCircle size={28} />
                    <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Sales Questions</p>
                  </SwiperSlide>
                  <SwiperSlide className='rounded swiper-shadow'>
                    <FileText size={28} />
                    <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>User Guides</p>
                  </SwiperSlide>
                  <SwiperSlide className='rounded swiper-shadow'>
                    <Archive size={28} />
                    <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>General Guides</p>
                  </SwiperSlide>
                </Swiper>



              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col lg="4" md="12">
          <Card className="p-1 bg-white" style={{ borderRadius: "40px" }}>
            <CardBody>
              <h6 className="mb-3">Schedule</h6>
              <PickerInline />

              <div className="mt-3">
                {schedule.map((daySchedule, index) => (
                  <div key={index}>
                    <h5 className="font-weight-bold">{daySchedule.day}</h5>
                    {daySchedule.tasks.map((task, idx) => (
                      <Row key={idx} className="border-right py-2">
                        <Col xs="4" className="d-flex justify-content-start">
                          <div>
                            <h6
                              className="mb-0 font-weight-bold"
                              style={{
                                borderRight: "1px solid rgb(60, 242, 255)",
                                paddingRight: "40px",
                              }}
                            >
                              {task.time}
                            </h6>
                          </div>
                        </Col>

                        <Col xs="8" className="d-flex justify-content-start">
                          <div>
                            <h6 className="mb-0">{task.task}</h6>
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <style>{`
  .flatpickr-calendar {
    width: 100% !important;
    max-width: 100% !important;
  }

  .apexcharts-legend{
  display: none !important;
  }
`}</style>
        </Col>
      </Row>
    </div>
  );
};

export default Home;