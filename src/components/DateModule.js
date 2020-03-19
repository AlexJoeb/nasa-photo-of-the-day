import React from 'react';
import { format } from 'date-fns';
import Flatpickr from "react-flatpickr";

export default function DateModule({ date, setDate }) {
    return (
        <div className="picker">
            <h1 className='picker-heading'>Have a different day in mind?</h1>
            <Flatpickr
                defaultValue={new Date().toString()}
                value={date}
                options={{
                    maxDate: format(new Date(), "yyyy-MM-dd"),
                    minDate: "2000-01-01",
                }}
                onChange={(e) => {
                    console.log("date changed")
                    return setDate(new Date(e[0]));
                }}
            />
        </div>
    );
}