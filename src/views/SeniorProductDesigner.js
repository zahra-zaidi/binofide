import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';
import { IconBookmark, IconShare } from '@tabler/icons-react';
import bona from '@src/assets/images/pages/bona.png';

const CustomButton = styled.button`
  background-color: #253180 !important;
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
const SeniorProductDesigner = () => {
  // const [jobDetails, setJobDetails] = useState(null);

  // useEffect(() => {
  //   axios.get('/api/job-details')
  //     .then(response => setJobDetails(response.data))
  //     .catch(error => console.error('Error fetching job details:', error));
  // }, []);

  // if (!jobDetails) return <p>Loading...</p>;

  return (
    <div className="container py-6 my-4">

      <div className='d-flex justify-content-start align-item-center my-2 py-50'>
        <img src={bona} alt='QR Code' className='img-fluid' width='65' />
        <span  style={{ color: "#253180" , fontSize : "38px" }}>Bona Fide</span>
      </div>


      <Row>
        <Col md={8}>

          <Card className='bg-white p-2' style={{ borderRadius: "20px" }}>
            <div className='d-flex justify-content-between alig-item-center'>
              <h4>Senior Product
                Designer</h4>

              <div className='d-flex align-item-center'>

                <CustomButton className='me-2'>Apply Now</CustomButton>

                <div className='rounded-circle border bg-light p-2 d-flex align-items-center justify-content-center me-2 ' style={{ borderRadius: "200px" }}>
                  <IconBookmark size={20} stroke={1.5} />
                </div>

                {/* Share Button */}
                <div className='rounded-circle border bg-light p-2 d-flex align-items-center justify-content-center' style={{ borderRadius: "200px" }}>
                  <IconShare size={20} stroke={1.5} />
                </div>

              </div>

            </div>


            {/* <h4 className="font-weight-bold">{jobDetails.title}</h4> */}
            <p className="text-muted">Hiring Lead Riyadh , Saudi Arabia
              {/* {jobDetails.location} */}
            </p>

            <div className="d-flex gap-2 mt-2">
              <div className="px-3 py-1 bg-light rounded">
                <p className="mb-0">  Full Time</p>
              </div>
              <div className="px-3 py-1 bg-light rounded">
                <p className="mb-0">On Site</p>
              </div>
              <div className="px-3 py-1 bg-light rounded">
                <p className="mb-0">675 - 1350</p>
              </div>

            </div>
            {/* <div className="d-flex gap-2 mt-2">
            {jobDetails.tags.map((tag, index) => (
              <div key={index} className="px-3 py-1 bg-light rounded">
                <p className="mb-0">{tag}</p>
              </div>
            ))}
          </div> */}

            <div className="mt-4">
              <h6>About this Job:</h6>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
              {/* <p>{jobDetails.about}</p> */}
            </div>

            <div className="mt-4">
              <h6>Qualification:</h6>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
              {/* <p>{jobDetails.qualification}</p> */}
            </div>

            <div className="mt-4">
              <h6>Key Points or Responsibility:</h6>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              </p>
              {/* <p>{jobDetails.responsibility}</p> */}
            </div>

            <div className="mt-4">
              <h6>Requirement:</h6>

              <p>It is a long established fact that a reader will be distracted by the readable content of a page
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
              {/* <p>{jobDetails.requirement}</p> */}
            </div>
          </Card>
        </Col>


        <Col md={4}>
          <Card className='bg-white p-2 rounded-4'>
            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6>Location:</h6>
              <span>Riyadh , Saudi Arabia</span>
              {/* <p>{jobDetails.location}</p> */}
            </div>

            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6 className="mt-2">Department:</h6>
              <span>HR</span>
            </div>
            {/* <p>{jobDetails.department}</p> */}

            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6 className="mt-2">Employment Type:</h6>
              <span>Full Time</span>
              {/* <p>{jobDetails.employmentType}</p> */}
            </div>

            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6 className="mt-2">Minimum Experience:</h6>
              <span>1 Year</span>
              {/* <p>{jobDetails.experience}</p> */}
            </div>


            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6 className="mt-2">Salary:</h6>
              <span>675 - 1350 SAR /Per Month</span>
              {/* <p>{jobDetails.salary} SAR /Per Month</p> */}
            </div>

            <div className='rounded p-1 mb-1' style={{ background: "#F3F3F3" }}>
              <h6 className="mt-2">Date Posted:</h6>
              <span>23 Dec 2024</span>
              {/* <p>{jobDetails.datePosted}</p> */}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SeniorProductDesigner;
