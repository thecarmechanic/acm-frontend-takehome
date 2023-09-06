import { useEffect, useState } from 'react';
import { Event } from '../types';
import EventCard from '@/components/EventCard';
import style from '../styles/Home.module.css';
import GridIcon from '@/icons/GridIcon';
import RowIcon from '@/icons/RowIcon';

//Feature: Pagination
import Paginate from '@/components/Paginate';

export default function Home() {
  const [displayEvents, setDisplayEvents] = useState<Event[]>([]);
  const [viewMode, setViewMode] = useState<'card' | 'row'>('card');
  const [eventMode, setEventMode] = useState<'all' | 'attended'>('all');


  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(25);

   //searchbar
   const [userSearch, setUserSearch] = useState<string>("");
   
  //filterevents
  const filteredEvents = displayEvents.filter((eventItem) =>{
    return(eventItem.title.includes(userSearch));
  })

  //tracks how the events have been displayed from the api based on the page the user is on
  const lastEventIndex = currentPage * eventsPerPage; 
  //identitifies the position in displayEvents array of the first event on the page
  const firstEventIndex = lastEventIndex - eventsPerPage;
  //splits the data in given range
  const currentEvents = filteredEvents.slice(firstEventIndex,lastEventIndex);

  //sets page number to the number received
  const paginate = (pageNumber: number) =>{
    setCurrentPage(pageNumber);
  };


 


  useEffect(() => {
    const loadEvents = async () => {
      const response = await fetch('https://api.acmucsd.com/api/v2/event/past');
      const data: { error: any; events: Event[] } = await response.json();
      setDisplayEvents(data.events);
    };
    //Bug 1: loadEvents function is only instantiated, but never used - need to call it
    loadEvents();
  }, []);

  return (
    <>
      <nav>
        <div className={style.navbar}>
          <img src="https://acmucsd.com/_next/static/media/ACMWhiteLogo.ccb2d1cb.png" width="64px" height="64px"></img>
          <span>Event Attendance Tracker</span>
        </div>
        <div className={style.rainbow}></div>
      </nav>
      <main className={style.container}>
        Search: <input type = "text" className = "search-bar" value = {userSearch} onChange = {(event)=>{setUserSearch(event.target.value)}}></input>
        
        <div className={style.optionsMenu}>
          <div className={style.eventModeBtns}>
            <button
              data-status={eventMode === 'all' ? 'active' : 'inactive'}
              onClick={() => setEventMode('all')}
              className={style.eventModeBtn}
            >
              All Past Events
            </button>
            <button
              data-status={eventMode === 'attended' ? 'active' : 'inactive'}
              onClick={() => setEventMode('attended')}
              className={style.eventModeBtn}
            >
              Attended Events
            </button>
          </div>
          <div className={style.viewModeBtns}>
            <button
              className={style.viewModeBtn}
              //Bug 2: specific view is not assigned when button is clicked on line 54 and line 61
              onClick={() => setViewMode((mode) => mode = "card")}
              data-mode={viewMode === 'card' ? 'active' : 'inactive'}
            >
              <GridIcon />
            </button>
            <button
              className={style.viewModeBtn}
              onClick={() => setViewMode((mode) => mode = "row")}
              data-mode={viewMode === 'row' ? 'active' : 'inactive'}
            >
              <RowIcon />
            </button>
          </div>
        </div>
        {viewMode === 'card' ? (
          <div className={style.cardContainer}>
            {currentEvents.map((event) => (
              <EventCard cardMode={eventMode} viewMode={viewMode} key={event.uuid} event={event} />
            ))}

            <Paginate eventsPerPage = {eventsPerPage} totalEvents = {displayEvents.length} paginate = {paginate} currentPage = {currentPage}/>
          </div>
        ) : (
          <table className={style.rowContainer}>
            <tbody>
              <tr className={style.headerRow}>
                <th className={style.checkboxHeaderCol}>Attended</th>
                <th className={style.titleHeaderCol}>Event Title</th>
                <th className={style.dateTimeHeaderCol}>Event Date</th>
                <th className={style.locationHeaderCol}>Event Location</th>
              </tr>
              {currentEvents.map((event) => (
                <EventCard cardMode={eventMode} viewMode={viewMode} key={event.uuid} event={event} />
              ))}
              <Paginate eventsPerPage = {eventsPerPage} totalEvents = {displayEvents.length} currentPage = {currentPage} paginate = {paginate}/>
            </tbody>
          </table>
        )}
      </main>
    </>
  );
}
