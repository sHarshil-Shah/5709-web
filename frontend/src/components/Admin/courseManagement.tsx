import React, { useState } from 'react';
import {
  Box,
  Flex,
  ChakraProvider,
  Text,
  Link,
  VStack,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import AdminNavBar from './adminNavigationBar';

type Course = {
  id: number;
  courseNumber: string;
  name: string;
  description: string;
  enrollmentRequirements: string;
  editing: boolean;
};

const CourseManagement = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      courseNumber: 'CSCI 101',
      name: 'Introduction to Computer Science',
      description: 'Course 1 description',
      enrollmentRequirements: 'Course 1 enrollment requirements',
      editing: false,
    },
    {
      id: 2,
      courseNumber: 'CSCI 202',
      name: 'Data Structures',
      description: 'Course 2 description',
      enrollmentRequirements: 'Course 2 enrollment requirements',
      editing: false,
    },
    {
      id: 3,
      courseNumber: 'CSCI 303',
      name: 'Algorithm Design',
      description: 'Course 3 description',
      enrollmentRequirements: 'Course 3 enrollment requirements',
      editing: false,
    },
  ]);

  const [newCourse, setNewCourse] = useState<Course>({
    id: Date.now(),
    courseNumber: '',
    name: '',
    description: '',
    enrollmentRequirements: '',
    editing: false,
  });

  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const toast = useToast();

  // Keep track of the last used ID to auto-increment new course IDs
  const [lastUsedId, setLastUsedId] = useState(courses.length > 0 ? courses[courses.length - 1].id : 0);

  const openCreateModal = (course?: Course) => {
    if (course) {
      // If a course is provided, it means we are editing an existing course
      setEditingCourse(course);
    } else {
      // If no course is provided, it means we are creating a new course
      setEditingCourse(null);
    }
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
    setNewCourse({
      id: Date.now(),
      courseNumber: '',
      name: '',
      description: '',
      enrollmentRequirements: '',
      editing: false,
    });
    setEditingCourse(null);
  };

  const addCourse = () => {
    if (newCourse.courseNumber.trim() === '' || newCourse.name.trim() === '') {
      toast({
        title: 'Validation Error',
        description: 'Course Number and Course Name are required fields.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newCourseWithId = {
      ...newCourse,
      id: Date.now(),
    };

    setCourses([...courses, newCourseWithId]);
    closeCreateModal();
    toast({
      title: 'Course Created',
      description: 'The course has been created successfully.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteCourse = (courseId: number) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  const toggleEdit = (courseId: number) => {
    const courseToEdit = courses.find((course) => course.id === courseId);

    if (courseToEdit) {
      openCreateModal(courseToEdit);
    }
  };

  const updateCourse = (courseId: number, updatedCourse: Course) => {
    setCourses(
      courses.map((course) => (course.id === courseId ? { ...updatedCourse } : course))
    );
    toast({
      title: 'Course Updated',
      description: 'The course has been updated successfully.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    closeCreateModal();
  };

  const handleSave = () => {
    if (editingCourse) {
      // Update the existing course
      const updatedCourse: Course = {
        ...editingCourse,
        courseNumber: newCourse.courseNumber,
        name: newCourse.name,
        description: newCourse.description,
        enrollmentRequirements: newCourse.enrollmentRequirements,
      };
      updateCourse(editingCourse.id, updatedCourse);
      setEditingCourse(null);
    } else {
      // Create a new course
      addCourse();
    }};
  
    return (
      <ChakraProvider>
        <Box>
          <AdminNavBar />
        </Box>
        <Box p={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Welcome to Course Management!
          </Text>
          <VStack spacing={4} align="start">
            <Box>
              <Button
                colorScheme="teal"
                leftIcon={<Box as="span">+</Box>}
                onClick={() => openCreateModal()}
              >
                Create Course
              </Button>
            </Box>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Course Number</Th>
                  <Th>Course Name</Th>
                  <Th>Description</Th>
                  <Th>Enrollment Requirements</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map((course) => (
                  <Tr key={course.id}>
                    <Td>{course.id}</Td>
                    <Td>{course.courseNumber}</Td>
                    <Td>
                      {course.editing ? (
                        <Input
                          value={newCourse.name}
                          onChange={(e) =>
                            setNewCourse({ ...newCourse, name: e.target.value })
                          }
                          marginRight={2}
                        />
                      ) : (
                        course.name
                      )}
                    </Td>
                    <Td>{course.description}</Td>
                    <Td>{course.enrollmentRequirements}</Td>
                    <Td>
                      {course.editing ? (
                        <Button
                          colorScheme="blue"
                          size="sm"
                          onClick={() => handleSave()}
                        >
                          Save
                        </Button>
                      ) : (
                        <>
                          <Button
                            colorScheme="green"
                            size="sm"
                            marginLeft={2}
                            onClick={() => toggleEdit(course.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            colorScheme="red"
                            size="sm"
                            marginLeft={2}
                            onClick={() => deleteCourse(course.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </Box>
  
        {/* Create Course Modal */}
        <Modal isOpen={isCreateModalOpen} onClose={closeCreateModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{newCourse.editing ? 'Edit Course' : 'Create Course'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Course Number</FormLabel>
                  <Input
                    value={newCourse.courseNumber}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseNumber: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Course Name</FormLabel>
                  <Input
                    value={newCourse.name}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={newCourse.description}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, description: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enrollment Requirements</FormLabel>
                  <Textarea
                    value={newCourse.enrollmentRequirements}
                    onChange={(e) =>
                      setNewCourse({
                        ...newCourse,
                        enrollmentRequirements: e.target.value,
                      })
                    }
                  />
                </FormControl>
                {newCourse.editing ? (
                  <Button colorScheme="teal" onClick={() => handleSave()}>
                    Save
                  </Button>
                ) : (
                  <Button colorScheme="teal" onClick={addCourse}>
                    Create
                  </Button>
                )}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  };
  
  export default CourseManagement;