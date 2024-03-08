import { useState } from 'react';
import DatePicker from './componets/datepicker';
import './App.css';
import { getMonth } from "date-fns/getMonth";
import { getYear } from './componets/datepicker/date_utils';
import { range } from 'lodash';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="App" style={{margin: '0 auto'}}>
      <DatePicker
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
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseYear} disabled={prevYearButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button onClick={ increaseYear} disabled={nextYearButtonDisabled}>
            {">"}
          </button>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
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
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    </div>
  );
}

export default App;
