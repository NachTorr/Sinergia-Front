import React from "react";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

interface DateProps {
  dateString: string;
}

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: es })}
    </time>
  );
};

export default Date;
