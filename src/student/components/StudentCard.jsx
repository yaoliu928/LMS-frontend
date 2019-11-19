import React from 'react';
import { withRouter } from 'react-router-dom';

const StudentCard = (props) => {
    //const { history } = props;
    //history.push('/courses');
    return (
        <div className='student-card'>student name John</div>
    )
}
export default withRouter(StudentCard);