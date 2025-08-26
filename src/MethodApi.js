import { useEffect, useState } from "react";

const MethodApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?https://whiskyhunter.net/api/auctions_data/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.slice(0, 10)); // assuming result is an array of objects
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Auctions Data</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Date</th>
              <th>Winning Bid Mean</th>
              <th>Trading Volume</th>
              <th>Lots Count</th>
              <th>All Auctions Lots Count</th>
              <th>Auction Name</th>
              <th>Auction Slug</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.dt}</td>
                <td>{item.winning_bid_mean}</td>
                <td>{item.auction_trading_volume}</td>
                <td>{item.auction_lots_count}</td>
                <td>{item.all_auctions_lots_count}</td>
                <td>{item.auction_name}</td>
                <td>{item.auction_slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : !error ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};

export default MethodApi;
