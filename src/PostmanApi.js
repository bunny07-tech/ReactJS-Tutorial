import React, { useState, useEffect } from "react";

const PostmanApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://68adc651a0b85b2f2cf49aab.mockapi.io/students/Student",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Postman Collections</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={item.avatar}
                alt={item.name}
                style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }}
              />
              <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
              <p><strong>ID:</strong> {item.id}</p>
              <p><strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : !error ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};

export default PostmanApi;
