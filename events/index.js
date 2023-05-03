const eventsURL = "https://lego.abakus.no/api/v1/events";

const dateString = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = `0${currentDate.getMonth() + 1}`.slice(-2);
  const currentDay = `0${currentDate.getDate()}`.slice(-2);
  const dateAfter = `date_after=${currentYear}-${currentMonth}-${currentDay}`;
  const dateBefore = `date_before=${
    currentYear + 1
  }-${currentMonth}-${currentDay}`;
  return `?${dateAfter}&${dateBefore}&page_size=30`;
};

const getEventsFromAbakus = async () => {
  let res = await (await fetch(eventsURL + dateString())).json();
  console.log(res);
  return res;
};

getEventsFromAbakus();
