import React, { useState } from 'react';
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import ForgetPasswordModal from './forgotPasswordModal';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loading';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [isLoading, setLoading] = useState(false);
  const fields = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(fields);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let error = '';

    // Validate email
    if (!formData.email) {
      error = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error = 'Invalid email format';
    }

    // Validate password
    if (!formData.password) {
      error = 'Password is required';
    }

    setErrorMessage(error);

    console.log(error);

    // Return true if there are no errors
    return error === '';
  };


  const openForgetPasswordModal = () => {
    setIsForgetPasswordModalOpen(true);
  };

  const onLoginClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      // Form is valid, perform form submission logic here
      console.log('Form submitted:', formData);


      const userType = await processLogin(formData);
      console.log(userType);
      switch (userType) {
        case "admin":
          navigate('/admin');
          break;
        case "prof":
          navigate('/prof');
          break;
        case "stud":
          navigate('/stud');
          break;
        default:
          setErrorMessage('Wrong Email or Password!');
          break;
      }
    }
    setLoading(false);
  };


  return (
    <> {isLoading && <Loader />}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <form onSubmit={onLoginClick}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email address" />
                  </InputGroup>

                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input name="password" value={formData.password} onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>

                  </InputGroup>

                  <FormHelperText textAlign="right">
                    <Link onClick={openForgetPasswordModal}>forgot password?</Link>
                  </FormHelperText>

                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
            {errorMessage !== '' && (
              <Alert status="error" marginTop="2">
                <AlertIcon />
                {errorMessage}
              </Alert>
            )}
          </Box>
        </Stack>

        <ForgetPasswordModal
          isOpen={isForgetPasswordModalOpen}
          onClose={() => setIsForgetPasswordModalOpen(false)}
        />
      </Flex></>
  );
};

export default Login;

function processLogin(formData: { email: string; password: string; }) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "user_email": formData.email, "password": formData.password }),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      return data['user_type'];
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}