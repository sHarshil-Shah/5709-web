import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import AdminNavBar from './adminNavigationBar';
import { Accordion } from 'react-bootstrap';

const PendingApproval = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <ChakraProvider>
      <Box>
        <AdminNavBar />
      </Box>
      <Box p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome to Pending Approval!
        </Text>

        <div style={{ marginLeft: '8%', marginBottom: '3%', marginRight: '8%' }}>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Request ID: #1</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column align-items-start">
              <img src="https://picsum.photos/400" alt="Profile" style={{ width: '100px', height: '100px' }} />
              <h4>Name</h4>
              <p>Birthdate: MM/DD/YYYY</p>
              <p>Age: XX</p>
              <p>Field of Specialization: Field</p>
              <p>Education: Education Details</p>
              <a href="link-url">Link</a>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="d-flex align-items-start">
              <Button variant="success" onClick={handleShow}>Approve</Button>
              <Button variant="danger" className="ms-3" onClick={handleShow2}>Reject</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{marginTop: '3%'}}>
          <Accordion.Header>Request ID: #2</Accordion.Header>
          <Accordion.Body>
          <div className="d-flex flex-column align-items-start">
              <img src="https://picsum.photos/400" alt="Profile" style={{ width: '100px', height: '100px' }} />
              <h4>Name</h4>
              <p>Birthdate: MM/DD/YYYY</p>
              <p>Age: XX</p>
              <p>Field of Specialization: Field</p>
              <p>Education: Education Details</p>
              <a href="link-url">Link</a>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="d-flex align-items-start">
              <Button variant="success" onClick={handleShow}>Approve</Button>
              <Button variant="danger" className="ms-3" onClick={handleShow2}>Reject</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>

        <Modal isOpen={show} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalBody>You are trying to approve a professor's application.</ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={handleClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleClose} ml={3}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={show2} onClose={handleClose2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalBody>You are trying to reject a professor's application.</ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={handleClose2}>
                Close
              </Button>
              <Button colorScheme="red" onClick={handleClose2} ml={3}>
                Reject
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default PendingApproval;
