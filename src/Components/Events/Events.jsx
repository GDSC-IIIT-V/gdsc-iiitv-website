import Event from "./Event";
import EventsData from "./util/EventsData";
import "./Events.scss";

import Line33 from "../../assets/images/Line 33.svg";
import Line34 from "../../assets/images/Line 34.svg";
import Line35 from "../../assets/images/Line 35.svg";

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
    <div className="events">
      <div className="events__title">Our Events</div>
      <div className="events__curvelines">
        <img src={Line33} alt="line-33" className="events__curvelines__line1" />
        <img src={Line34} alt="line-34" className="events__curvelines__line2" />
        <img src={Line35} alt="line-35" className="events__curvelines__line3" />
      </div>
      <div className="events__container">
        <div className="events__container__upper">
          <div className="events__container__upper__event1">
            <div className="events__container__upper__event1__vert-line"></div>
            <div className="events__container__upper__event1__connector"></div>
            <div className="events__container__upper__event1__event-data">
              {eventComponents[0]}
            </div>
          </div>
          <div className="events__container__upper__event2">
            <div className="events__container__upper__event2__vert-line"></div>
            <div className="events__container__upper__event2__connector"></div>
            <div className="events__container__upper__event2__event-data">
              {eventComponents[1]}
            </div>
          </div>
          <div className="events__container__upper__event3">
            <div className="events__container__upper__event3__vert-line"></div>
            <div className="events__container__upper__event3__connector"></div>
            <div className="events__container__upper__event3__event-data">
              {eventComponents[2]}
            </div>
          </div>
        </div>
        <div className="events__container__lower">
          <div className="events__container__lower__event1">
            <div className="events__container__lower__event1__vert-line"></div>
            <div className="events__container__lower__event1__connector"></div>
            <div className="events__container__lower__event1__event-data">
              {eventComponents[3]}
            </div>
          </div>
          <div className="events__container__lower__event2">
            <div className="events__container__lower__event2__vert-line"></div>
            <div className="events__container__lower__event2__connector"></div>
            <div className="events__container__lower__event2__event-data">
              {eventComponents[4]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
