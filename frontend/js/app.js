// connects everything

let currentDate = new Date();

function updateCalendar() {
  renderCalendar(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

// create event functions

function getEvents(){
  return JSON.parse(localStorage.getItem("events")) || [];
}

function saveEvent(date,title) {
  const events = getEvents();
  events.push({date, title});
  localStorage.setItem("events", JSON.stringify(events));
  
}
// Initial load
updateCalendar();