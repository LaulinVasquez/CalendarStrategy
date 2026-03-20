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

// Initial load
updateCalendar();