import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Row, Col, Card, Input, Button, Label, Form, FormGroup } from 'reactstrap';
import Select from 'react-select';
import FileUploaderSingle from './fileuploader/FileUploaderSingle'
import bona from '@src/assets/images/pages/bona.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Calendar } from 'react-feather';
import FileUploaderMultiple from './fileuploader/FileUploaderMultiple'

const ApplyNow = () => {

  const { control, handleSubmit, register, watch } = useForm({
    defaultValues: {
      experiences: [
        {
          jobTitle: '',
          companyName: '',
          startDate: '',
          endDate: '',
          currentlyWorking: false,
          description: ''
        }
      ],
      education: [
        {
          degree: '',
          schoolName: '',
          startDate: '',
          endDate: '',
          description: '',
          resume: '',
          portfolio: ''
        }
      ]
    }
  });

  // const { fields, append, remove } = useFieldArray({ control, name: 'experiences' });

  // Helper function to check if "currentlyWorking" is true for a given index
  // Separate field arrays for Experience & Education
  const { fields: experienceFields, append: addExperience, remove: removeExperience } = useFieldArray({ control, name: 'experiences' });
  const { fields: educationFields, append: addEducation, remove: removeEducation } = useFieldArray({ control, name: 'education' });

  const currentlyWorking = (index) => {
    return watch(`experiences.${index}.currentlyWorking`);
  };


  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="container py-6 my-4">

      <div className='d-flex justify-content-start align-item-center my-2 py-50'>
        <img src={bona} alt='QR Code' className='img-fluid' width='65' />
        <span style={{ color: "#253180", fontSize: "38px" }}>Bona Fide</span>
      </div>


      <Row>
        <Col md={8}>

          <Card className='bg-white p-2' style={{ borderRadius: "20px" }}>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>First Name*</Label>
                    <Controller name='firstName' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>Last Name*</Label>
                    <Controller name='lastName' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>Where are you Located?*</Label>
                    <Controller name='location' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>Your Job Title*</Label>
                    <Controller name='jobTitle' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>Please share your Phone Number*</Label>
                    <Controller
                      name='phoneNumber'
                      control={control}
                      render={({ field }) => <PhoneInput {...field} country={'us'} inputStyle={{ width: '100%' }} />}
                    />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>Please share your Email Address*</Label>
                    <Controller name='email' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>Applying For?*</Label>
                    <Controller name='applyingFor' control={control} render={({ field }) => <Select {...field} options={[{ label: 'Software Engineer', value: 'software-engineer' }]} />} />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>What level of education do you have?*</Label>
                    <Controller name='education' control={control} render={({ field }) => <Select {...field} options={[{ label: 'Bachelor', value: 'bachelor' }]} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>What is your current Salary?*</Label>
                    <Controller name='currentSalary' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>What is your Expected Salary?*</Label>
                    <Controller name='expectedSalary' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <FormGroup>
                    <Label>What is your current company name?*</Label>
                    <Controller name='companyName' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup>
                    <Label>How many years of experience do you have in this field?*</Label>
                    <Controller name='experience' control={control} render={({ field }) => <Input {...field} />} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col sm='12'>
                  <Label>Upload your Pic*</Label>
                  <FileUploaderSingle />
                </Col>
              </Row>

              <Row>
                <Col sm='12'>
                  <FormGroup>
                    <Label>Summary</Label>
                    <Controller name='summary' control={control} render={({ field }) => <Input {...field} type='textarea' rows='4' />} />
                  </FormGroup>
                </Col>
              </Row>

              <h4 className="mb-3 d-flex justify-content-between align-items-center">
                Experience
                <Button
                  color="light"
                  onClick={() =>
                    addExperience({
                      jobTitle: '',
                      companyName: '',
                      startDate: '',
                      endDate: '',
                      currentlyWorking: false,
                      description: ''
                    })
                  }
                >
                  + Add New
                </Button>
              </h4>

              {experienceFields.map((item, index) => (
                <div key={item.id} className="mb-4 p-3 border rounded">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Your Job Title *</Label>
                        <Input
                          {...register(`experiences.${index}.jobTitle`)}
                          placeholder="Eg. Developer"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Company Name *</Label>
                        <Input
                          {...register(`experiences.${index}.companyName`)}
                          placeholder="Eg. Bona Fide"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Start Date *</Label>
                        <div className="position-relative">
                          <Input
                            type="date"
                            {...register(`experiences.${index}.startDate`)}
                          />
                          <Calendar className="position-absolute end-0 me-2 top-50 translate-middle-y" size={16} />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>End Date *</Label>
                        <div className="d-flex align-items-center">
                          <Input
                            type="date"
                            {...register(`experiences.${index}.endDate`)}
                            disabled={currentlyWorking(index)}
                          />
                          <Label className="ms-2 mb-0" style={{ cursor: 'pointer' }}>
                            <Input type="checkbox" {...register(`experiences.${index}.currentlyWorking`)} />{' '}
                            Currently Working
                          </Label>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      {...register(`experiences.${index}.description`)}
                      rows="3"
                    />
                  </FormGroup>
                  {experienceFields.length > 1 && (
                    <Button color="danger" onClick={() => removeExperience(index)} size="sm">
                      Remove
                    </Button>
                  )}
                </div>
              ))}




              <h4 className="mb-3 d-flex justify-content-between align-items-center">
                Education
                <Button
                  color="light"
                  onClick={() =>
                    addEducation({
                      degree: '',
                      schoolName: '',
                      startDate: '',
                      endDate: '',
                      currentlyStudying: false,
                      description: '',
                      resume: null,
                      portfolio: ''
                    })
                  }
                >
                  + Add New
                </Button>
              </h4>

              {educationFields.map((item, index) => (
                <div key={item.id} className="mb-4 p-3 border rounded">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Degree/Diploma *</Label>
                        <Input {...register(`education.${index}.degree`)} placeholder="Eg. Bachelor's in Computer Science" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>School Name / University Name *</Label>
                        <Input {...register(`education.${index}.schoolName`)} placeholder="Eg. Harvard University" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Start Date *</Label>
                        <div className="position-relative">
                          <Input type="date" {...register(`education.${index}.startDate`)} />
                          <Calendar className="position-absolute end-0 me-2 top-50 translate-middle-y" size={16} />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>End Date *</Label>
                        <div className="d-flex align-items-center">
                          <Input
                            type="date"
                            {...register(`education.${index}.endDate`)}
                            disabled={watch(`education.${index}.currentlyStudying`)}
                          />
                          <Label className="ms-2 mb-0" style={{ cursor: 'pointer' }}>
                            <Input type="checkbox" {...register(`education.${index}.currentlyStudying`)} /> Currently Studying
                          </Label>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" {...register(`education.${index}.description`)} rows="3" placeholder="Brief details about your education..." />
                  </FormGroup>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Please Attach Your Resume *</Label>
                        <FileUploaderSingle name={`education.${index}.resume`} />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Portfolio</Label>
                        <FileUploaderMultiple
                          label="Upload ID Card (Front & Back)"
                         
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {educationFields.length > 1 && (
                    <Button color="danger" onClick={() => removeEducation(index)} size="sm">
                      Remove
                    </Button>
                  )}
                </div>
              ))}


            </Form>
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

export default ApplyNow;
