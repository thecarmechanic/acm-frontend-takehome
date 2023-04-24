const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Given ISO-8601 strings for the start and end date of a location,
 * this function returns a formatted date for us to display on each event.
 * Example outputs:
 *  - Apr 25
 *  - Jun 11
 */
export const formatDate = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const month = MONTHS[startDate.getMonth()];
  return `${month} ${startDate.getUTCDate()}`;
};

export const formatTime = (start: string, end: string): string => {
  const startTime = new Date(start).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const endTime = new Date(end).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return `${startTime} - ${endTime}`;
};
