import { getFeaturedEvents } from "../dummy-data";
import EventList from '../components/event/event-list.js';

function HomePage(){
    const FeaturedEvents = getFeaturedEvents();

    return (
        <div>
           <EventList items={FeaturedEvents} />
        </div>
    )
}

export default HomePage;