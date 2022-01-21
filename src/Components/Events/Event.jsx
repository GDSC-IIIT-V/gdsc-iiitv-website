import "./Event.scss";

const Event = ({ thumbnail, title, date, text }) => {
  return (
    <div className="event">
      <div className="event__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="event__data">
        <div className="event__data__title">{title}</div>
        <div className="event__data__date">
          <div className="event__data__date__date-title">Date & Time:</div>
          <div className="event__data__date__date-value">{date}</div>
        </div>
        <div className="event__data__text">{text}</div>
      </div>
    </div>
  );
};

export default Event;
