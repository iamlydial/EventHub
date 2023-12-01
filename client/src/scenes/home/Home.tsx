import React, { useEffect, useState } from "react";

type Props = {};

const Home: React.FC<Props> = () => {
  const [backendData, setBackendData] = useState<{ users?: string[] }>({});

  useEffect(() => {
    fetch("/api") // Assumes your React app and server are running on the same origin
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-24">
      
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default Home;
