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
      <h1 className="text-3xl font-bold underline">Test Pull request!</h1>
      <h1 className="text-3xl font-bold underline">Test Pull request!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="font-roboto font-bold"> H1 Roboto - Hello world!</h1>
      <h2 className="font-roboto font-bold">H2 Roboto - Hello world!</h2>
      <h3 className="font-roboto font-bold">H3 Roboto - Hello world!</h3>
      <p className="font-roboto">Paragraph Roboto</p>
      <h1 className="font-mukta font-bold"> H1 Roboto - Hello world!</h1>
      <h2 className="font-mukta font-bold">H2 Roboto - Hello world!</h2>
      <h3 className="font-muktao font-bold">H3 Roboto - Hello world!</h3>
      <p className="font-roboto">Paragraph Mukta</p>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default Home;
