import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import MoodHistory from "./MoodHistory";
import MoodStories from "./MoodStories";
import "./App.css"; 

const App = () => {
  const [currentMood, setCurrentMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
    setMoodHistory((prevHistory) => [
      ...prevHistory,
      { mood, date: new Date().toLocaleString() },
    ]);
  };

  return (
    <div className="app">
      <h1>Mood Tracker + Changer</h1>
      <MoodSelector onSelectMood={handleMoodSelect} />
      <h2>Current Mood: {currentMood || "No mood selected"}</h2>
      <MoodHistory history={moodHistory} />
      {currentMood && <MoodStories mood={currentMood} />}
    </div>
  );
};

export default App;
