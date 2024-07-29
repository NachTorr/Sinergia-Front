import React from "react";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import { toZonedTime, format as formatZoned } from "date-fns-tz";

interface DateProps {
  dateString: string;
}

const DateComponent: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);

  // Convertir la fecha UTC a la zona horaria de Argentina
  const timeZone = "America/Argentina/Buenos_Aires";
  const zonedDate = toZonedTime(date, timeZone);

  // Formatear la fecha y hora
  const formattedDate = format(zonedDate, "d MMMM, yyyy 'a las' HH:mm", {
    locale: es,
  });

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateComponent;
