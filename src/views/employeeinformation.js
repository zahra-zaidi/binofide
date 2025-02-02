import React from "react";
import { useForm, Controller } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { Button, Label, Input, Form, Row, Col, Card } from "reactstrap";
import bona from '@src/assets/images/pages/bona.png';
import FileUploaderSingle from './fileuploader/FileUploaderSingle'
import FileUploaderMultiple from './fileuploader/FileUploaderMultiple'


const EmployeeInformation = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Employee information submitted successfully!");
  };

  return (


    <div className="container mt-4">

      <div className='d-flex justify-content-start align-item-center my-2 py-50'>
        <img src={bona} alt='QR Code' className='img-fluid' width='65' />
        <span style={{ color: "#253180", fontSize: "38px" }}>Bona Fide</span>
      </div>

      <Card className="bg-white rounded-4 p-2">
        <span style={{ color: "#253180", fontSize: "28px" }}>   Welcome Aboard, Rayan
        </span>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

        <h5 className="mb-3 text-center">Employee Information</h5>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {/* Left Column */}
            <Col md="6">
              <Label>Middle Name*</Label>
              <Input type="text" {...register("middleName")} required />

              <Label>Family Name*</Label>
              <Input type="text" {...register("familyName")} required />

              <Label>Date of Birth*</Label>
              <Controller control={control} name="dob" render={({ field }) => <Flatpickr {...field} className="form-control" />} required />

              <Label>Marital Status*</Label>
              <Input type="select" {...register("maritalStatus")} required>
                <option>Select...</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </Input>

              <Label>Religion*</Label>
              <Input type="select" {...register("religion")} required>
                <option>Select...</option>
                <option>Christianity</option>
                <option>Islam</option>
                <option>Hinduism</option>
                <option>Buddhism</option>
                <option>Other</option>
              </Input>

              <Label>Email*</Label>
              <Input type="email" {...register("email")} required />

              <Label>Major</Label>
              <Input type="text" {...register("major")} />

              <Label>District</Label>
              <Input type="text" {...register("district")} />

              <Label>Building No.*</Label>
              <Input type="text" {...register("buildingNo")} required />

              <Label>Additional Number</Label>
              <Input type="text" {...register("additionalNumber")} />

              <Label>Home Country Address*</Label>
              <Input type="text" {...register("homeCountryAddress")} required />

              <Label>Relationship with Next of Kin*</Label>
              <Input type="text" {...register("nextOfKinRelationship")} required />

              <Label>Email - Next of Kin*</Label>
              <Input type="email" {...register("nextOfKinEmail")} required />
            </Col>

            {/* Right Column */}
            <Col md="6">
              <Label>Last Name*</Label>
              <Input type="text" {...register("lastName")} required />

              <Label>Name in Arabic</Label>
              <Input type="text" {...register("nameInArabic")} />

              <Label>Nationality*</Label>
              <Input type="select" {...register("nationality")} required>
                <option>Select...</option>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Germany</option>
                <option>India</option>
                <option>Pakistan</option>
                <option>Other</option>
              </Input>

              <Label>Gender*</Label>
              <Input type="select" {...register("gender")} required>
                <option>Select...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Input>

              <Label>Phone*</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput {...field} country={"us"} inputClass="form-control"  />
                )}
                rules={{ required: true }}

            
              />

              <Label>Qualification*</Label>
              <Input type="select" {...register("qualification")} required>
                <option>Select...</option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
                <option>Other</option>
              </Input>

              <Label>City*</Label>
              <Input type="text" {...register("city")} required />

              <Label>Street No.*</Label>
              <Input type="text" {...register("streetNo")} required />

              <Label>Zip Code*</Label>
              <Input type="text" {...register("zipCode")} required />

              <Label>Unit Number</Label>
              <Input type="text" {...register("unitNumber")} />

              <Label>Next of Kin (Name)*</Label>
              <Input type="text" {...register("nextOfKinName")} required />

              <Label>Mobile Number - Next of Kin*</Label>
              <Controller
                name="nextOfKinPhone"
                control={control}
                render={({ field }) => (
                  <PhoneInput {...field} country={"us"} inputClass="form-control" />
                )}
                rules={{ required: true }}
              />

              <Label>Bank Name*</Label>
              <Input type="text" {...register("bankName")} required />
            </Col>
          </Row>

          {/* IBAN and Bank Details in a Separate Row */}
          <Row className="">
            <Col md="12">
              <Label>IBAN</Label>
              <Input type="text" {...register("iban")} />
            </Col>
          </Row>



          <Col sm="12">
            <label>Bank Letter*</label>
            <FileUploaderSingle
              label="Upload Bank Letter"
              onChange={(file) => setValue("bankLetter", file)}
            />
          </Col>

          <Col sm="12">
            <label>Please Share Front and Back Image of ID Card</label>
            <FileUploaderMultiple
              label="Upload ID Card (Front & Back)"
              onChange={(files) => setValue("idCard", files)}
            />
          </Col>

          <Row className="">
            <Col md="12">
              <Label>ID Number*</Label>
              <Input type="text" {...register("ID Number*n")} />
            </Col>
          </Row>


          <Col sm="12">
            <label>Passport*</label>
            <FileUploaderSingle
              label="Upload Passport"
              onChange={(file) => setValue("passport", file)}
            />
          </Col>

          <Col sm="12">
            <label>Educational Certificate* (Attach your certificate for the last degree attained)</label>
            <FileUploaderMultiple
              label="Upload Educational Certificate"
              onChange={(files) => setValue("educationalCertificate", files)}
            />
          </Col>



          <div className="text-center mt-3">
            <Button color="primary" type="submit" style={{ backgroundColor: "#253180" }}>
              Submit
            </Button>
          </div>



        </Form>
      </Card>

    </div>
  );
};

export default EmployeeInformation;
