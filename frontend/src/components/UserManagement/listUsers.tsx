import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Input,
    Button,
    Th,
    useToast
} from '@chakra-ui/react';
import { FaTrashAlt } from "react-icons/fa";
import { User } from '../model/user.model';
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
            const firstNameMatch = item.fname?.includes(filterFirstName.toLowerCase());
            const lastNameMatch = item.lname?.includes(filterLastName.toLowerCase());
            return emailMatch || firstNameMatch || lastNameMatch;
        });
        setFilteredData(filtered);
    }, [data, filterEmail, filterFirstName, filterLastName]);

    function handleDelete(id: string | undefined): Promise<string> {
        setLoading(true);
        console.log(id);
        return fetch('http://localhost:3000/deleteUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id": id }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount === 1) {
                    fetchUsers()
                        .then((response) => {
                            setData(response.users);
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
            })
            .catch((error) => {
                console.error(error);
                return { users: [] };
            }).finally(()=>{
                setLoading(false);
            });
    }

    return (
        <>
            {isLoading && <Loader />}

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
                            <Td>{item.fname}</Td>
                            <Td>{item.lname}</Td>
                            <Td>{item.user_type}</Td>
                            <Td>
                                <Button colorScheme='red' leftIcon={<FaTrashAlt />} onClick={() => handleDelete(item._id)}>
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



function fetchUsers(): Promise<{ users: User[] }> {
    return fetch('http://localhost:3000/listUsers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
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
            return { users: [] };
        });
}

