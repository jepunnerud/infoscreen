document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("data-container");

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

  // Load data immediately on page load
  loadData();

  // Refresh data every hour (3600000 milliseconds)
  setInterval(loadData, 3600000);

  async function loadData() {
    try {
      // Fetch the JSON data asynchronously
      console.log(dateString());
      const response = await fetch(
        "https://lego.abakus.no/api/v1/events" + dateString()
      );
      const jsonData = await response.json();

      // Render the JSON data to the HTML
      renderData(jsonData.results);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  function renderData(data) {
    for (const [index, key] of data.entries()) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        element = document.getElementById("header0");
        element.innerText = value.title;
      }
    }
  }
});
