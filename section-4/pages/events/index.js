import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/event/event-list';
import EventsSearch from "../../components/event/events-search";
import { Fragment } from "react";
import { useRouter } from 'next/router';

function AllEventsPage(){
  const router=useRouter();
  const events = getAllEvents();
 

  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
   
  }

    return (

        <Fragment>
             <EventsSearch onSearch={findEventsHandler}/>  
            <EventList items={events} />
        </Fragment>
           
       
    )
}

export default AllEventsPage;