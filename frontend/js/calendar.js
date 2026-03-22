// builds the calendar UI

function renderCalendar(month, year) {
    const grid = document.getElementById("calendarGrid");
    const monthYear = document.getElementById("monthYear");

    grid.innerHTML = ""

    const firstDay = getFirstDayOfMonth(year,month);
    const totalDays = getDaysInMonth(year,month);
    const monthNames = [
            "January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    monthYear.textContent = `${monthNames[month]} - ${year}`;

    for (let i = 0; i < firstDay; i++){
        const empty = document.createElement("div");
        grid.appendChild(empty)
    }
    for (let day=1; day <= totalDays; day++){
        const cell = document.createElement("div");
        cell.textContent = day;
        cell.addEventListener("click", () => {
            console.log(`clicked: ${day}/${month+1}/${year}`)
        })
        if (isToday(day,month,year)) {
            cell.classList.add("today");
        }
        grid.appendChild(cell);
    }
    
}

