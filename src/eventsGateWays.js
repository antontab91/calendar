const baseUrl =
  "https://5f119d6b65dd950016fbd93a.mockapi.io/api/v1/calendar/";


export const getEventsList = () =>
  fetch(baseUrl).then((response) => response.json());

export const createEvent = (eventsData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventsData),
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
