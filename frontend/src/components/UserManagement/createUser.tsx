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
    FormControl,
    InputRightElement,
    Radio, RadioGroup,
    useToast,
    Alert,
    AlertIcon
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaPortrait } from "react-icons/fa";
import { User } from '../model/user.model';
import Loader from '../../loading';


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CPortrait = chakra(FaPortrait);


const SignUp: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const handleShowConfirmClick = () => setShowConfirmPassword(!showConfirmPassword);

    const toast = useToast();

    const [value, setValue] = React.useState('1');

    const fields = {
        user_email: '',
        first_name: '',
        last_name: '',
        password: '',
        conpass: '',
        user_type: '',
    };


    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);
        console.log('Form submitted:', formData);
        formData.user_type = value;
        if (validateForm()) {
            createUser(formData)
                .then((response) => {
                    console.log(response);
                    setFormData(fields);
                    toast({
                        title: 'User Created!',
                        // description: `Message: ${response.user.user_email}`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    console.error(error);
                    setErrorMessage(error.message);
                }).finally(() => {
                    setLoading(false);
                }
                );
        }

    };

    const [formData, setFormData] = useState(fields);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        console.log(name, type);
        if (type === 'radio') {
            // Update the value for radio button
            console.log("here");
            setValue(value);

        } else {
            // Update the form data for other input fields
            setFormData({ ...formData, [name]: value });
        }
    };


    const validateForm = () => {
        let error = "";

        // Validate email
        if (!formData.user_email) {
            error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            error = 'Invalid email format';
        } else if (!formData.password) {
            error = 'Password is required';
        } else if (!formData.conpass) {
            error = 'Confirm Password is required and should be same as Password!';
        } else if (formData.password !== formData.conpass) {
            error = 'Confirm Password should be same as Password!';
        } else if (!formData.first_name) {
            error = 'First Name is Required';
        } else if (!formData.last_name) {
            error = 'Last Name is required';
        }

        setErrorMessage(error);

        console.log(error);

        // Return true if there are no errors
        return error === '';
    };

    return (
        <>
            {isLoading && <Loader />}
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
                        <form onSubmit={handleSubmit}>
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
                                            children={<CFaUserAlt color="gray.300" />} />
                                        <Input name="user_email" value={formData.user_email} onChange={handleChange} type="email" placeholder="email address" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CPortrait color="gray.300" />} />
                                        <Input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CPortrait color="gray.300" />} />
                                        <Input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />} />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />} />
                                        <Input name="conpass" value={formData.conpass} onChange={handleChange}
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm Password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowConfirmClick}>
                                                {showConfirmPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <RadioGroup name="user_type" onChange={setValue} value={value}>
                                            <Stack direction='row'>
                                                <Radio value='stud'>Student</Radio>
                                                <Radio value='prof'>Professor</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Create User
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


            </Flex></>
    );
};

export default SignUp;



function createUser(user: User): Promise<{ user: User }> {
    return fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response data
            console.log(data);
            return data;
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            return {};
        });
}
