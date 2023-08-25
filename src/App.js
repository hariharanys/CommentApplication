import "./App.css";
import React, { useEffect, useState } from "react";
import ReceivedChat from "./components/receivedChat";
import ChatBox from "./components/chatBox";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json()) // Corrected line: res.json() instead of res.json
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="App py-5">
      {userData &&
        userData.comments.map((comment) => <ReceivedChat userData={comment} />)}
      <ChatBox />
    </div>
  );
}

export default App;
