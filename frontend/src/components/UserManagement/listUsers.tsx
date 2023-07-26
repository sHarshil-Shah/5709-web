import React, {useEffect, useState} from 'react';
import {Button, Input, Table, Tbody, Td, Th, Thead, Tr, useToast} from '@chakra-ui/react';
import {FaTrashAlt} from "react-icons/fa";
import {User} from '../model/user.model';
import Loader from '../../loading';
import envVariables from "../../importenv";
import MultiSelectMenu from "./MultiSelectMenu";

const TableWithFilters: React.FC = () => {
    const [filterEmail, setFilterEmail] = useState<string>('');
    const [filterFirstName, setFilterFirstName] = useState<string>('');
    const [filterLastName, setFilterLastName] = useState<string>('');
    const [data, setData] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const toast = useToast();
    const [isLoading, setLoading] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(['prof', 'stud']);

    const handleMultiSelectChange = (selectedValues: string[]) => {
        setSelectedOptions(selectedValues);
        console.log(selectedValues);
    };
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
            .then((response: any) => {
                setData(response.users);
            })
            .catch((error: any) => {
                console.error(error);
            }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const filtered = data.filter((item) => {
            const emailMatch = filterEmail ? item.user_email?.includes(filterEmail.toLowerCase()) : false;
            const firstNameMatch = filterFirstName ? item.first_name?.includes(filterFirstName.toLowerCase()) : false;
            const lastNameMatch = filterLastName ? item.last_name?.includes(filterLastName.toLowerCase()) : false;
            let userTypeMatch = false;
            if (item.user_type != null) {
                userTypeMatch = selectedOptions.length > 0 ? selectedOptions.includes(item.user_type) : false;
            }
            console.log(selectedOptions);
            return emailMatch || firstNameMatch || lastNameMatch || userTypeMatch;
        });
        console.log(data);
        console.log(filtered);
        setFilteredData(filtered);
    }, [data, filterEmail, filterFirstName, filterLastName, selectedOptions]);

    async function handleDelete(id: string | undefined): Promise<string> {
        const backendURL = envVariables.backendURL;
        setLoading(true);
        try {
            try {
                const response = await fetch(backendURL + '/deleteUser', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"id": id}),
                });
                const data = await response.json();
                if (data.response.deletedCount === 1) {
                    await fetchUsers()
                        .then((response_1: any) => {
                            setData(response_1.users);
                            toast({
                                title: 'User Deleted!',
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                            });
                        })
                        .catch((error: any) => {
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
                        <Td>
                            <MultiSelectMenu label="User Types"
                                             options={[{option: "Student", value: "stud"}, {option: "Professor", value: "prof"}]}
                                             onChange={handleMultiSelectChange}
                            />
                        </Td>
                        <Td></Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item._id}>
                            <Td>{item.user_email}</Td>
                            <Td>{item.first_name}</Td>
                            <Td>{item.last_name}</Td>
                            <Td>{item.user_type === 'stud' ? 'Student' : 'Professor'}</Td>
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
    const backendURL = envVariables.backendURL;
    try {
        const response = await fetch(backendURL + '/listUsers', {
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

