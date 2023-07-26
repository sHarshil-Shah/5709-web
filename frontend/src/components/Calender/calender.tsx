// Author: Harshil Shah

import React from "react";
import {Box, Heading, List, ListItem, Text} from "@chakra-ui/react";


const deadlinesList = [
    {id: 1, title: "Deadline 1", dueDate: "2023-08-15"},
    {id: 2, title: "Deadline 2", dueDate: "2023-08-10"},
    {id: 3, title: "Deadline 3", dueDate: "2023-08-20"},
    // Add more deadlines as needed
];

const DeadlinesPage = () => {
    // Sort deadlines by due date in ascending order
    const sortedDeadlines = deadlinesList.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

    return (
        <Box p={4}>
            <Heading mb={4}>Upcoming Deadlines</Heading>
            <List spacing={3}>
                {sortedDeadlines.map((deadline) => (
                    <ListItem key={deadline.id}>
                        <Heading size="md">{deadline.title}</Heading>
                        <Text>Due Date: {deadline.dueDate}</Text>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default DeadlinesPage;
