import "./EventsColumn.scss";

const EventsColumn = ({
  isThirdCol = false,
  className,
  topEvent,
  bottomEvent,
}) => {
  const topVertLineClasses =
    "event-col__vert-line " + (className.topVertLine || "");
  const topConnectorClasses =
    "event-col__connector " + (className.topConnector || "");
  const bottomConnectorClasses =
    "event-col__connector " + (className.bottomConnector || "");
  return (
    // adding third column classes conditionally
    <div className={`event-col ${isThirdCol ? "event-col__third-col" : ""}`}>
      {/* <div className={topVertLineClasses}></div> */}
      <div className={topConnectorClasses}></div>
      {topEvent}
      {/* <div className="event-col__vert-line"></div> */}
      <div className={bottomConnectorClasses}></div>
      {bottomEvent}
    </div>
  );
};

export default EventsColumn;
