// Author: Harshil Shah
import React from 'react';
import Stud from '../components/otherpages/stud';
import Prof from '../components/otherpages/prof';
import AdminDashboard from "../components/Admin/adminDashboard";

const DashboardRoute = () => {
    const userDataString = localStorage.getItem('userData');
    const user_type = JSON.parse(userDataString ? userDataString : '').user_type ?? 'default_user_type';

    switch (user_type) {
        case 'admin':
            return <AdminDashboard/>;
        case 'stud':
            return <Stud/>;
        case 'prof':
            return <Prof/>;
    }

    return null;
};

export default DashboardRoute;