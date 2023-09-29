import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Date = () => {

    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentDateTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = currentDateTime.format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div>

            <p className='text-center mb-2'>
                <span className='text-gray-400 text-center'>{formattedDateTime}</span>
            </p>
        </div>
    );
};

export default Date;