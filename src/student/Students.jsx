import React from 'react';
import StudentCard from './components/StudentCard';
import './styles/students.scss';
const Students = (props) => {
    // const { history } = props;
    // history.push('/courses');
    return <div>
        This is students page
        <StudentCard />
        <StudentCard />
        {/*props.redirect && <Redirect to={props.redirect} />*/}
    </div>
};
export default Students;