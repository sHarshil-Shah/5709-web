import React, { useState } from 'react';
import { Box, ChakraProvider, Text, Button, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import AdminNavBar from './adminNavigationBar';
import { Card, Dropdown, DropdownButton, ListGroup,Modal } from 'react-bootstrap';

const ProfessorMapping = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedOption, setSelectedOption] = useState('Select an Instructor');
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <ChakraProvider>
      <Box>
        <AdminNavBar />
      </Box>
      <Box p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome to Professor Mapping Section!
        </Text>
        {/* Use the MappingCard component here */}
        <div className="d-flex flex-column align-items-start" style={{ marginLeft: '8%', marginRight: '8%', marginTop: '3%', marginBottom: '8%' }}>
          <div style={{ fontSize: '32px', fontWeight: 700 }}>Mapping</div>
          <div className="d-flex  flex-wrap justify-content-between" style={{ width: '100%' }}>
            <div className="mt-5">
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Course Title</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Id: Course ID</ListGroup.Item>
                    <ListGroup.Item>Course Name: Course Name</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <DropdownButton variant="primary" title={selectedOption}>
                      <Dropdown.Item onClick={() => handleOptionSelect('Dr. Dey')}>Dr. Dey</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect('Dr. Sharma')}>Dr. Sharma</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect('Dr. darshana')}>Dr. darshana</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="primary" onClick={handleShow} style={{ marginTop: '10px' }}>
                      Allocate
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              <Modal show ={show} onHide={handleClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Are you sure?</ModalHeader>
                  <ModalBody>You are trying to map a professor to a course!</ModalBody>
                  <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                      Confirm
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default ProfessorMapping;
