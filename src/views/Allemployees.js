// src/views/AllEmployees.jsx

import React, { useState } from 'react';
import { Card, CardBody, Table, Button, InputGroup, InputGroupText, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Search } from 'react-feather';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: #0C1539 !important;
  width: 300px;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`;

const CustomButton2 = styled.button`
  background-color:rgb(231, 231, 231) !important;
  width: 300px;
  padding: 10px;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;


`;




const AllEmployees = () => {



  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');  // Default sorting by 'newest'
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sample static data with 'createdAt' added
  const employees = [
    { name: 'John Doe', company: 'Company A', phone: '123-456-7890', email: 'john@company.com', country: 'USA', status: 'Active', createdAt: '2023-08-01' },
    { name: 'Jane Smith', company: 'Company B', phone: '987-654-3210', email: 'jane@company.com', country: 'Canada', status: 'Inactive', createdAt: '2024-01-15' },
    { name: 'Alice Johnson', company: 'Company C', phone: '555-123-4567', email: 'alice@company.com', country: 'UK', status: 'Active', createdAt: '2022-05-10' },
    // Add more employee data with 'createdAt' here
  ];

  // Sorting function based on the selected option
  const sortEmployees = (a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest (descending)
    } else if (sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt); // Sort by oldest (ascending)
    }
    return 0; // Default case, no sorting
  };

  const filteredEmployees = employees
    .filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(sortEmployees);

  // Toggle Dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Change sorting option
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setDropdownOpen(false);  // Close dropdown after selection
  };

  // Function to determine status color with inline styles for debugging
  const getStatusColor = (status) => {
    if (status === 'Active') {
      return { backgroundColor: '#16C09861 ', color: 'white', border: "2px solid #00B087" }; // Green for Active
    } else if (status === 'Inactive') {
      return { backgroundColor: '#FFC5C5', color: '#DF0404', border: "2px solid #DF0404" }; // Red for Inactive
    }
    return {}; // Default, no color
  };



  return (
    <div>
      <Card>
        <div className="p-2 d-flex justify-content-between align-items-center">
          <div>
            <h3>All Employees</h3>
            <small style={{ color: "#16C098" }}>Active Members</small>
          </div>
          <div className="d-flex align-items-center">
            {/* Search Input */}
            <InputGroup className="mr-3" >
              <InputGroupText>
                <Search size={16} />
              </InputGroupText>
              <Input
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>

            {/* Dropdown for Sorting */}
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="mr-3 bg-light-gray" style={{ marginRight: "20px", marginLeft: "20px" }}>
              <DropdownToggle caret >
                Sort By: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleSortChange('newest')}>Newest</DropdownItem>
                <DropdownItem onClick={() => handleSortChange('oldest')}>Oldest</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Add Employee Button */}
            <CustomButton>Add Employee</CustomButton>
          </div>
        </div>

        <CardBody>
          <Table striped responsive>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.company}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.country}</td>
                  <td>
                    <span style={{
                      backgroundColor: getStatusColor(employee.status).backgroundColor,
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {employee.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllEmployees;
