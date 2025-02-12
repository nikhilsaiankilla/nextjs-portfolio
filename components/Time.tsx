import React from 'react'

const Time = () => {
    const now: Date = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const amPm: string = hours >= 12 ? "PM" : "AM";

    const formattedHours: number = hours % 12 || 12;

    const formattedTime: string = `${String(formattedHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${amPm}`;

    return (
        <span className='text-lg text-light-accent dark:text-dark-accent'>{formattedTime}</span>
    )
}

export default Time