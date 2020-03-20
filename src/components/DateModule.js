import React from 'react';
import { format } from 'date-fns';
import Flatpickr from "react-flatpickr";

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function DateModule({ date, updateDate }) {
    return (
        <div className="picker">
            <h1 className='picker-heading'>Have a different day in mind?</h1>
            <Flatpickr
                css={css`
                    border: 0;
                    border-radius: 5px;
                    background: rgba(0, 0, 0, .3);
                    color: #EEF0F2;
                    padding: 10px 20px;
                    font-size: 1.2rem;
                `}
                defaultValue={new Date().toString()}
                value={date}
                options={{
                    maxDate: format(new Date(), "yyyy-MM-dd"),
                    minDate: "2000-01-01",
                }}
                onChange={(e) => {
                    updateDate(new Date(e[0]));
                }}
            />
        </div>
    );
}