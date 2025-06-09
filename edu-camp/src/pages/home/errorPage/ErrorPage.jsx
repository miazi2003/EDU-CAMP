import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img  src="https://i.ibb.co/Kxqxgjrm/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-m.jpg" alt="" />
            <Link to={'/'}>
            <div>
                <button className="btn bg-green-800 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 ">Back To Home</button>
            </div></Link>
        </div>
    );
};

export default ErrorPage;