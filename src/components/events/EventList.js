import React, { useEffect, useState } from "react"
import { getEvents } from "../../managers/EventManager"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="games">
            {
                events.map(event => {
                    return <section key={`events--${event.id}`} className="event">
                        <div className="event__organizer">Event organizer:{event.organizer}</div>
                        <div className="event__game">Playing: {event.game}</div>
                        <div className="event__date">Date:{event.event_date}</div>
                    </section>
                })
            }
        </article>
    )
}