import React from 'react';


import Stud from '../components/otherpages/stud';
import Prof from '../components/otherpages/prof';
import FinalAssignmentPage from '../components/ProfAssignments/FinalAssignmentPage';
import Admin from '../components/otherpages/admin';
const DashboardRoute = () => {
    const userDataString = localStorage.getItem('userData');
    const user_type = JSON.parse(userDataString?userDataString:'').user_type ?? 'default_user_type';

    switch (user_type){
        case 'admin':
             return <Admin/>;
        case 'stud':
            return <Stud/>;
        case 'prof':
            // return <Prof/>;
            return <FinalAssignmentPage/>;
    }

    return null;
};

export default DashboardRoute;