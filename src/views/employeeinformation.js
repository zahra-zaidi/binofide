import React from "react";
import { useForm, Controller } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import '@styles/react/libs/flatpickr/flatpickr.scss'
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Reactstrap Imports
import { Button, Label, Input, Form, Row, Col } from "reactstrap";

const EmployeeInformation = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Employee information submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Employee Information</h3>

      <PerfectScrollbar>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {/* Left Column */}
            <Col md="6">
              <Label className="form-label" for="middle-name">
                Middle Name
              </Label>
              <Input type="text" id="middle-name" placeholder="Enter middle name" {...register("middleName")} />

              <Label className="form-label" for="family-name">
                Family Name
              </Label>
              <Input type="text" id="family-name" placeholder="Enter family name" {...register("familyName")} />

              <Label className="form-label" for="dob">
                Date of Birth
              </Label>
              <Controller
                control={control}
                name="dob"
                render={({ field }) => <Flatpickr {...field} className="form-control" />}
              />

              <Label className="form-label" for="marital-status">
                Marital Status
              </Label>
              <Input type="select" id="marital-status" {...register("maritalStatus")}>
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Input>

              <Label className="form-label" for="religion">
                Religion
              </Label>
              <Input type="select" id="religion" {...register("religion")}>
                <option value="">Select...</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Other">Other</option>
              </Input>

              <Label className="form-label" for="email">
                Email
              </Label>
              <Input type="email" id="email" placeholder="Enter email" {...register("email")} />

              <Label className="form-label" for="major">
                Major
              </Label>
              <Input type="text" id="major" placeholder="Enter major" {...register("major")} />
            </Col>

            {/* Right Column */}
            <Col md="6">
              <Label className="form-label" for="last-name">
                Last Name
              </Label>
              <Input type="text" id="last-name" placeholder="Enter last name" {...register("lastName")} />

              <Label className="form-label" for="nationality">
                Nationality
              </Label>
              <Input type="select" id="nationality" {...register("nationality")}>
                <option value="">Select...</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Other">Other</option>
              </Input>

              <Label className="form-label" for="gender">
                Gender
              </Label>
              <Input type="select" id="gender" {...register("gender")}>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Input>

              <Label className="form-label" for="phone">
                Phone
              </Label>
              <Row>
                <Col md="4">
                  <Input type="select" {...register("phonePrefix")}>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+92">+92 (Pakistan)</option>
                    <option value="+971">+971 (UAE)</option>
                  </Input>
                </Col>
                <Col md="8">
                  <Input type="tel" id="phone" placeholder="Enter phone number" {...register("phone")} />
                </Col>
              </Row>

              <Label className="form-label" for="qualification">
                Qualification
              </Label>
              <Input type="select" id="qualification" {...register("qualification")}>
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </Input>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="text-center mt-3">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </PerfectScrollbar>
    </div>
  );
};

export default EmployeeInformation;
