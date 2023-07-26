// Author: Harshil Shah
// Author: Viral Siddhapura
import React from 'react';


import Stud from '../components/otherpages/stud';
import AdminDashboard from "../components/Admin/adminDashboard";
import FinalAssignmentPage from '../components/ProfAssignments/FinalAssignmentPage';
const DashboardRoute = () => {
    const userDataString = localStorage.getItem('userData');
    const user_type = JSON.parse(userDataString ? userDataString : '').user_type ?? 'default_user_type';

    switch (user_type) {
        case 'admin':
            return <AdminDashboard/>;
        case 'stud':
            return <Stud/>;
        case 'prof':
            // return <Prof/>;
            return <FinalAssignmentPage/>;
    }

    return null;
};

export default DashboardRoute;