// Author: Harshil Shah
// Author: Viral Siddhapura
// Author: Yatrik Pravinbhai Amrutiya
import {Box, Button, Flex, Link as ChakraLink, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./service/LoginState";

const TitleBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [menuOptions, setMenuOptions] = useState([
        {title: "Login", route: "/login"},
    ]);

    const handleClassMateClick = () => {
        navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("userData");
        navigate("/");
    };


    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        const dataString = localStorage.getItem("userData");
        console.log(dataString);
        // Perform any logic to update menu options based on the current state
        // Example: Update menu options based on the user's role or authentication status
        console.log(location);
        if (location.pathname === "/") {
            setMenuOptions(
                dataString ? [{title: "Dashboard", route: "/dashboard"}] : [{
                    title: "Register as a professor",
                    route: "/Signup"
                }]
            );
        } else if (
            location.pathname === "/dashboard" ||
            location.pathname === "/announcement" ||
            location.pathname === "/content" ||
            location.pathname === "/prof" ||
            location.pathname === "/stud"
        ) {
            setMenuOptions([
                {title: "Dashboard", route: "/dashboard"},
                {title: "Announcement", route: "/announcement"},
                {title: "Content", route: "/content"},
            ]);
        } else {
            setMenuOptions([]);
        }
    }, [location]);

    const isAdminDashboard = location.pathname.startsWith('/admin'); // Check if the current path is '/admin'
    const contactLink = isAdminDashboard ? '/admin/contact' : '/contact';
    const faqLink = isAdminDashboard ? '/admin/faq' : '/faq';

    return (
        <div>
            <Box as="header" pos="sticky" top={0} zIndex={100} shadow="md" mb={2}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    bg="#E27087"
                    shadow="lg"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                    px={4}
                    py={2}
                    flexWrap="wrap"
                >
                    <Box onClick={handleClassMateClick} cursor="pointer">
                        <Text
                            fontSize={{base: 24, md: 30}}
                            fontWeight="bold"
                            margin={5}
                            flex={{base: "100%", md: "auto"}}
                        >
                            Class Mate
                        </Text>
                    </Box>
                    <Flex alignItems="center">
                        {menuOptions.map((option) => (
                            <ChakraLink
                                as={Link}
                                to={option.route}
                                key={option.route}
                                mr={4}
                                fontSize={{base: 16, md: 20}}
                                fontWeight="bold"
                                _hover={{textDecoration: "underline"}}
                            >
                                {option.title}
                            </ChakraLink>
                        ))}
                        {isLoggedIn() ? (
                            <Button colorScheme="red" onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <Button colorScheme="blue" onClick={handleLogin}>
                                Login
                            </Button>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </div>
    );
};

export default TitleBar;
