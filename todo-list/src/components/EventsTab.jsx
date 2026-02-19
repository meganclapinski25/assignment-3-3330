import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../redux/eventsSlice";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const [title, setTitle] = useState('');
const [day, setDay] = useState('Sunday');
const [time, setTime] = useState('');



return (
    <div>
        <h2>Weekly Events</h2>
        <form onSubmit ={handleSubmit}>
            <input
                type="text"
                placeholder ="Event Name"
                vaule = {title}
                onChange={(e)=>}
                />




        </form>




    </div>
);
