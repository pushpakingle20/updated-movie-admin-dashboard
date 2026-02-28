import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  { title: "Movie Release", start: new Date(), end: new Date() },
];

export default function CalendarPage() {
  return (
    <div style={{ height: 500 }}>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
  );
}
