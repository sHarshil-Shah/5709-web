import React, { useState } from 'react';
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Text,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';

interface Assignment {
  id: number;
  title: string;
  description: string;
  visibleDate: string;
}

interface AssignmentModalProps {
  onSubmit: (assignment: Assignment) => void;
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({onSubmit}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [visibleDate, setVisibleDate] = useState('');
  const [visibleDateError, setVisibleDateError] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    let isValid = true;

    // Title validation
    if (title.trim() === '') {
      setTitleError('Title is required');
      isValid = false;
    } else {
      setTitleError('');
    }

    // Description validation
    if (description.trim() === '') {
      setDescriptionError('Description is required');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    // Visible Date validation
    if (visibleDate.trim() === '') {
      setVisibleDateError('Visible Date is required');
      isValid = false;
    } else {
      setVisibleDateError('');
    }

    // File validation
    if (!uploadedFile) {
      setFileError('File is required');
      isValid = false;
    } else {
      setFileError('');
    }

    if (isValid) {
      // All fields are valid, submit the form
      console.log('Assignment submitted:', {
        title,
        description,
        visibleDate,
        uploadedFile,
      });

      const assignment = {
        id: Math.random(),
        title,
        description,
        visibleDate
      }

      onSubmit(assignment);

      toast({
        title: 'Submission Successful',
        description: 'Assignment has been submitted successfully.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      onClose();
    }
  };

  const handleOpenModal = () => {
    setTitle('');
    setTitleError('');
    setDescription('');
    setDescriptionError('');
    setVisibleDate('');
    setVisibleDateError('');
    setUploadedFile(null);
    setFileError('');

    onOpen();
  };

  return (
    <>
      <Button
        bg="green.500"
        color="white"
        border="1px"
        borderColor="black"
        _hover={{ bg: 'green.600' }}
        onClick={handleOpenModal}
      >
        Create Assignments
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assignment Creation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired isInvalid={titleError !== ''}>
                <FormLabel>Assignment Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <FormErrorMessage>{titleError}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={descriptionError !== ''}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <FormErrorMessage>{descriptionError}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={visibleDateError !== ''}>
                <FormLabel>Visible Date</FormLabel>
                <Input
                  type="date"
                  value={visibleDate}
                  onChange={(e) => setVisibleDate(e.target.value)}
                />
                <FormErrorMessage>{visibleDateError}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={fileError !== ''}>
                <FormLabel>File Upload</FormLabel>
                <HStack>
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    style={{ display: 'none' }}
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload">
                    <Button as="span" colorScheme="blue">
                      Upload File
                    </Button>
                  </label>
                  <Text>{uploadedFile?.name}</Text>
                </HStack>
                <FormErrorMessage>{fileError}</FormErrorMessage>
              </FormControl>
              <HStack justify="flex-end">
                <Button colorScheme="gray" onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme="green" onClick={handleSubmit}>
                  Submit
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AssignmentModal;