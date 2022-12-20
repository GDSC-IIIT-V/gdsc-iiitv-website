import Event from "./Event";
import EventsColumn from "./EventsColumn";
import EventsData from "./util/EventsData";

import Line33 from "../../assets/images/Line 33.svg";
import Line34 from "../../assets/images/Line 34.svg";
import Line35 from "../../assets/images/Line 35.svg";

import "./Events.scss";

const Events = () => {
  const eventComponents = EventsData.map((event) => (
    <Event
      thumbnail={event.thumbnail}
      title={event.title}
      date={event.date}
      text={event.text}
    />
  ));
  return (
    <div className="events" id="events">
      <div className="events__title">Our Events</div>
      {/* <div className="events__curvelines">
        <img src={Line33} alt="line-33" className="events__curvelines__line1" />
        <img src={Line34} alt="line-34" className="events__curvelines__line2" />
        <img src={Line35} alt="line-35" className="events__curvelines__line3" />
      </div> */}
      <div className="events__container">
        <EventsColumn
          className={{
            topVertLine: "events__container__vert-line__left",
            topConnector: "red",
            bottomConnector: "blue",
          }}
          topEvent={eventComponents[0]}
          bottomEvent={eventComponents[1]}
        />
        <EventsColumn
          className={{
            topVertLine: "events__container__vert-line__middle",
            topConnector: "green",
            bottomConnector: "red",
          }}
          topEvent={eventComponents[2]}
          bottomEvent={eventComponents[3]}
        />
        <EventsColumn
          isThirdCol={true}
          className={{
            topVertLine: "events__container__vert-line__right",
            topConnector: "yellow",
            bottomConnector: "green",
          }}
          topEvent={eventComponents[4]}
          bottomEvent={eventComponents[5]}
        />

        {/* <div className="events__container__more-info">
          <div className="events__container__more-info__message">
            Fun Events, talks and a lot more for upcoming developers.{" "}
          </div>
          <div className="events__container__more-info__events-link">
            <a
              href="https://gdsc.community.dev/indian-institute-of-information-technology-vadodara/"
              target="_blank"
              rel="noreferrer"
            >
              Find out more...
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
