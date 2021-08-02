import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (  
        <div className='DatePicker'>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()}
                isClearable
                placeholderText='dd/mm/yyyy'
                className="form-control"
            />
        </div>
    );
}
 


export default MyDatePicker;