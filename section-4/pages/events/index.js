import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/event/event-list';
import EventsSearch from "../../components/event/events-search";
import { Fragment } from "react";

function AllEventsPage(){

    const events = getAllEvents()

    return (
        
        <Fragment>
             <EventsSearch />  
            <EventList items={events} />
        </Fragment>
           
       
    )
}

export default AllEventsPage;