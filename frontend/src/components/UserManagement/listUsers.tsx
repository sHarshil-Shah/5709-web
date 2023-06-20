import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Input, Button, Th
} from '@chakra-ui/react';
import { FaTrashAlt } from "react-icons/fa";

const data = [
    { id: 1, email: 'johndoe@example.com', fname: 'f name 1', lname: 'l name 1', utype: 'student' },
    { id: 2, email: 'johndoe2@example.com', fname: 'f name 2', lname: 'l name 2', utype: 'professor' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },

];

const TableWithFilters = () => {
    const [filterEmail, setFilterEmail] = useState('');
    const [filterFirstName, setFilterFirstName] = useState('');
    const [filterLastName, setFilterLastName] = useState('');

    const handleEmailFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilterEmail(event.target.value);
    };

    const handleFirstNameFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilterFirstName(event.target.value);
    };

    const handleLastNameFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilterLastName(event.target.value);
    };

    const filteredData = data.filter((item) => {
        return item.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
            item.fname.toLowerCase().includes(filterFirstName.toLowerCase()) &&
            item.lname.toLowerCase().includes(filterLastName.toLowerCase())
            ;
    }

    );

    return (
        <>
            <Table variant="striped">
                <Thead >
                    <Tr>
                        <Th>No</Th>
                        <Th>Email</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>User Type</Th>
                        <Th>Delete User</Th>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td>
                            <Input
                                placeholder="Filter Via Email"
                                value={filterEmail}
                                onChange={handleEmailFilterChange} />
                        </Td>
                        <Td> <Input
                            placeholder="Filter First Name"
                            value={filterFirstName}
                            onChange={handleFirstNameFilterChange} /></Td>
                        <Td> <Input
                            placeholder="Filter Last name"
                            value={filterLastName}
                            onChange={handleLastNameFilterChange} /></Td>
                        <Td> </Td>
                        <Td> </Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.fname}</Td>
                            <Td>{item.lname}</Td>
                            <Td>{item.utype}</Td>
                            <Td><Button colorScheme='red' leftIcon={<FaTrashAlt />}>
                                Delete
                            </Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table></>
    );
};

export default TableWithFilters;
