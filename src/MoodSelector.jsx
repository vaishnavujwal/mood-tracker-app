import React from "react";

const MoodSelector = ({ onSelectMood }) => {
  const moods = ["Happy", "Sad", "Neutral", "Excited", "Tired"];

  return (
    <div className="mood-selector">
      <h2>Select  and Chnage Your Mood:</h2>
      {moods.map((mood) => (
        <button key={mood} onClick={() => onSelectMood(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
