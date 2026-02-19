import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../redux/eventsSlice";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function EventsTab(){
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('Sunday');
    const [time, setTime] = useState('');

    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title) return;
        dispatch(addEvent({
            id: Date.now(),
            title,
            day,
            time,
        }));
        setTitle('');
        setTime('');
        setDay('Sunday');
    };


    return (
        <div>
            <h2>Weekly Events</h2>
            <form onSubmit ={handleSubmit}>
                <input
                    type="text"
                    placeholder ="Event Name"
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        {days.map((d) => <option key={d}>{d}</option>)}
                        </select>
                        <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        />
                        <button type="submit">Add Event</button>
    
    
    
    
            </form>
    
            <div className="week-grid">
                {days.map((d)=>(
                    <div key={d} className="day-column">
                        <h3>{d}</h3>
                        {events
                            .filter((e)=> e.day ===d)
                            .map((e)=>(
                                <div key={e.id} className="event-chip">
                                    <span>{title}</span>
                                    {e.title &&<span className ="event-time">{e.time}</span>}
                                    <button onClick={()=>dispatchEvent(deleteEvent(e.id))}>X</button>
    
                                </div>
                            ))}
                            </div>
                ))}
            </div>
    
        </div>
    );
    
}

export default EventsTab;




