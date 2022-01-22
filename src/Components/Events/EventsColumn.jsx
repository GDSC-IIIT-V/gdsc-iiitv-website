import "./EventsColumn.scss";

const EventsColumn = (props) => {
  const topVertLineClasses =
    "event-col__vert-line " + (props.className.topVertLine || "");
  const topConnectorClasses =
    "event-col__connector " + (props.className.topConnector || "");
  const bottomConnectorClasses =
    "event-col__connector " + (props.className.bottomConnector || "");
  return (
    <div className="event-col">
      <div className={topVertLineClasses}></div>
      <div className={topConnectorClasses}></div>
      {props.topEvent}
      <div className="event-col__vert-line"></div>
      <div className={bottomConnectorClasses}></div>
      {props.bottomEvent}
    </div>
  );
};

export default EventsColumn;
