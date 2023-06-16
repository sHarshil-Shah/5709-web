import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";

const LandingFooter = () => {
    return (
        <Flex mt={8} justifyContent="center" flexWrap="wrap">
            <Box
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="md"
                maxWidth="400px"
                width={{ base: "100%", sm: "50%" }}
                mx={{ base: 0, sm: 2 }}
                mb={4}
                shadow={"lg"}
            ></Box>

            <Box
                width="2px"
                height="200px"
                bg="black"
                mx={{ base: 0, sm: 2 }}
                mb={4}
            />

            <Box
                bg="#white"
                p={6}
                borderRadius="md"
                boxShadow="md"
                maxWidth="400px"
                width={{ base: "100%", sm: "50%" }}
                mx={{ base: 0, sm: 2 }}
                mb={4}
                shadow={"lg"}
            >
            </Box>
        </Flex>
    )
}

export default LandingFooter;