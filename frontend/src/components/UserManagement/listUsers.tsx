import React, {useEffect, useState} from 'react';
import {Button, Input, Table, Tbody, Td, Th, Thead, Tr, useToast} from '@chakra-ui/react';
import {FaTrashAlt} from "react-icons/fa";
import {User} from '../model/user.model';
import Loader from '../../loading';

const TableWithFilters: React.FC = () => {
    const [filterEmail, setFilterEmail] = useState<string>('');
    const [filterFirstName, setFilterFirstName] = useState<string>('');
    const [filterLastName, setFilterLastName] = useState<string>('');
    const [data, setData] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const toast = useToast();
    const [isLoading, setLoading] = useState(false);
    const handleEmailFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterEmail(event.target.value);
    };

    const handleFirstNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterFirstName(event.target.value);
    };

    const handleLastNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterLastName(event.target.value);
    };

    useEffect(() => {
        setLoading(true);

        fetchUsers()
            .then((response) => {
                setData(response.users);
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const filtered = data.filter((item) => {
            console.log("item", item);
            console.log(item.user_email);
            const emailMatch = item.user_email?.includes(filterEmail.toLowerCase());
            const firstNameMatch = item.first_name?.includes(filterFirstName.toLowerCase());
            const lastNameMatch = item.last_name?.includes(filterLastName.toLowerCase());
            return emailMatch || firstNameMatch || lastNameMatch;
        });
        console.log(filtered);
        setFilteredData(filtered);
    }, [data, filterEmail, filterFirstName, filterLastName]);

    async function handleDelete(id: string | undefined): Promise<string> {
        setLoading(true);
        console.log(id);
        try {
            try {
                const response = await fetch('http://localhost:3000/deleteUser', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"id": id}),
                });
                const data = await response.json();
                console.log(data);
                if (data.response.deletedCount === 1) {
                    fetchUsers()
                        .then((response_1) => {
                            setData(response_1.users);
                            toast({
                                title: 'User Deleted!',
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                            });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    toast({
                        title: 'Error deleting User',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
                return data;
            } catch (error_1) {
                console.error(error_1);
                return "error_1";
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {isLoading && <Loader/>}

            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>User Type</Th>
                        <Th>Delete User</Th>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input
                                placeholder="Filter Via Email"
                                value={filterEmail}
                                onChange={handleEmailFilterChange}
                            />
                        </Td>
                        <Td>
                            <Input
                                placeholder="Filter First Name"
                                value={filterFirstName}
                                onChange={handleFirstNameFilterChange}
                            />
                        </Td>
                        <Td>
                            <Input
                                placeholder="Filter Last name"
                                value={filterLastName}
                                onChange={handleLastNameFilterChange}
                            />
                        </Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item._id}>
                            <Td>{item.user_email}</Td>
                            <Td>{item.first_name}</Td>
                            <Td>{item.last_name}</Td>
                            <Td>{item.user_type}</Td>
                            <Td>
                                <Button colorScheme='red' leftIcon={<FaTrashAlt/>}
                                        onClick={() => handleDelete(item._id)}>
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};

export default TableWithFilters;


async function fetchUsers(): Promise<{ users: User[] }> {
    try {
        const response = await fetch('http://localhost:3000/listUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        // Handle the response data
        console.log(data);
        return data;
    } catch (error) {
        // Handle any errors
        console.error(error);
        return {users: []};
    }
}

