import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Button from "./components/button/Button.component";
import { fetchData } from "./services/data";

const days = ["Today", "Yesterday", " Last Week", " Last Month", "Last Year"];
const url = "http://localhost:4000/data";
const data = [
  [{ sum_today: 76196 }],
  [{ emails_today: 246 }],
  [{ discount_cards_today: 34 }],
  [{ full_cards_today: 274 }],
  [{ total_cards_today: 580 }],
  [{ free_cards_today: 214 }],
  [{ sum_yesterday: 76196 }],
  [{ emails_yesterday: 246 }],
  [{ discount_cards_yesterday: 34 }],
  [{ full_cards_yesterday: 274 }],
  [{ total_cards_yesterday: 580 }],
  [{ free_cards_yesterday: 214 }],
  [{ sum_last_week: 118382 }],
  [{ emails_last_week: 289 }],
  [{ discount_cards_last_week: 65 }],
  [{ full_cards_last_week: 461 }],
  [{ total_cards_last_week: 821 }],
  [{ free_cards_last_week: 240 }],
  [{ sum_last_month: 102823 }],
  [{ emails_last_month: 331 }],
  [{ discount_cards_last_month: 48 }],
  [{ full_cards_last_month: 392 }],
  [{ total_cards_last_month: 781 }],
  [{ free_cards_last_month: 280 }],
  [{ sum_last_year: 194581 }],
  [{ emails_last_year: 717 }],
  [{ discount_cards_last_year: 208 }],
  [{ full_cards_last_year: 841 }],
  [{ total_cards_last_year: 1530 }],
  [{ free_cards_last_year: 481 }],
];

function App() {
  // const [data, setData] = useState(null);

  console.log(mapper(data, days));
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    setDisplayedData(mapper(data, days)[index]);
  }, [displayedData]);

  // useEffect(() => {
  //   const getData = async () => {
  //     fetchData(url).then((fetchedData) => {
  //       setData(fetchedData);
  //       console.log(fetchedData);
  //     });
  //   };
  //   getData();
  // }, []);

  return (
    <div className="App">
      <Header />
      <div className="App__navigation">
        <ul className="App__navigation__list">
          {days &&
            days.map((day, index) => (
              <li key={index} className="item">
                <Button onSelect={() => onSelect(index)} label={day} />
              </li>
            ))}
        </ul>
      </div>
      <div className="stats">
        <ul className="stats__list">
          <Stat />
        </ul>
      </div>

      {/* <div className="main"> */}
    </div>
  );
}

const onSelect = (index) => {
  return mapper(data, days)[index];
};

const mapper = (data, days) => {
  return days.map((day, index) => ({
    [`${day}`]: data.slice(6 * index, (index + 1) * 6).map((el) => el[0]),
  }));
};

export default App;
