import { useState } from "react";
import DatePicker from "./componets/datepicker";
import "./App.css";
import { getMonth } from "date-fns/getMonth";
import { getYear } from "./componets/datepicker/date_utils";
import { range } from "lodash";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="App" style={{ margin: "0 auto" }}>
      <DatePicker
        weeks={weeks}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          decreaseYear,
          increaseMonth,
          increaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
        }) => (
          <div
            className="custom-header"
          >
            <div>

            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
                  fill="#FF7632"
                />
              </svg>
            </button>
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z"
                  fill="#FF7632"
                />
              </svg>
            </button>
            </div>
            <div>
            <button onClick={decreaseYear} disabled={prevYearButtonDisabled}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
                  fill="#FF7632"
                />
              </svg>
            </button>
            <select
              class="years"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={increaseYear} disabled={nextYearButtonDisabled}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z"
                  fill="#FF7632"
                />
              </svg>
            </button>
            </div>
            
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default App;
