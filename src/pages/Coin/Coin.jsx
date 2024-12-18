import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import moment from "moment";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": `	${import.meta.env.VITE_API_KEY}`,
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  // const fetchHistoricalData = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       "x-cg-demo-api-key": `	${import.meta.env.VITE_API_KEY}`,
  //     },
  //   };

  //   fetch(
  //     "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10",
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setHistoricalData(res))
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    fetchCoinData();
    // fetchHistoricalData();
  }, [currency]);

  if (coinData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        {/* <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div> */}
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24H High</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24H Low</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>All Time High</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.ath[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>All Time Low</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.atl[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Last Updated</li>
            <li>{moment(coinData.market_data.last_updated).fromNow()}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
};

export default Coin;
