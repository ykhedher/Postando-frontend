import React, { useState, useEffect } from 'react'; import './App.css';
import Header from './Header';
import Stat from './Stat'
import chart from 'chart.js'

function App() {

  // const [data, setData] = useState(null);
  let data = [
    [{ 'sum': 34114 } ],
    [{ 'emails': 88 } ],
    [{ 'discount_cards': 24 } ],
    [{ 'full_cards': 121 } ],
    [{ 'total_cards': 222 } ],
    [{ 'free_cards': 56 } ],
    [{ 'sum_yesterday': 76196 } ],
    [{ 'emails_yesterday': 246 } ],
    [{ 'discount_cards_yesterday': 34 } ],
    [{ 'full_cards_yesterday': 274 } ],
    [{ 'total_cards_yesterday': 580 } ],
    [{ 'free_cards_yesterday': 214 } ],
    [{ 'sum_lastweek': 118382 } ],
    [{ 'emails_last_week': 289 } ],
    [{ 'discount_cards_last_week': 65 } ],
    [{ 'full_cards_last_week': 461 } ],
    [{ 'total_cards_last_week': 821 } ],
    [{ 'free_cards_last_week': 240 } ],
    [{ 'sum_last_month': 102823 } ],
    [{ 'emails_last_month': 331 } ],
    [{ 'discount_cards_last_month': 48 } ],
    [{ 'full_cards_last_month': 392 } ],
    [{ 'total_cards_last_month': 781 } ],
    [{ 'free_cards_last_month': 280 } ],
    [{ 'sum_last_year': 194581 } ],
    [{ 'emails_last_year': 717 } ],
    [{ 'discount_cards_last_year': 208 } ],
    [{ 'full_cards_last_year': 841 } ],
    [{ 'total_cards_last_year': 1530 } ],
    [{ 'free_cards_last_year': 481 } ]
  ]

  // useEffect(() => {
  //   const getData = async () => {
  //   await fetch('http://localhost:4000/data')
  //   .then(res => res.json())
  //   .then(fetchedData => {
  //     setData(fetchedData);
  //     console.log(fetchedData)
  //   })}
  //   getData();
  // }, [])

  return (
    <div className="App">
      <Header />
      <div className="App__navigation">
            <ul className="App__navigation__list">
               <li className="item"><button className="item__button item">Today</button></li>
               <li className="item"><button className="item__button item">Yesterday</button></li>
               <li className="item"><button className="item__button item">Last Week</button></li>
               <li className="item"><button className="item__button item">Last Month</button></li>
               <li className="item"><button className="item__button item">Last Year</button></li>
            </ul>
      </div>
      <div className="stats">


        <ul className="stats__list">
          {data &&
            data.map((item, index) =>
              item.map(object =>
                Object.keys(object).map((key) =>
                  (<li key={index}>{key+' :'}{object[key]}</li>)
                )
              )
            )}</ul>
      </div>



      {/* <div className="main"> */}

    </div>

  );
}

export default App;
