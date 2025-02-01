import React from "react";

const MoodStories = ({ mood }) => {
  const stories = {
    Happy : [
      <strong>"Story 1: A young girl found a puppy on her way home and decided to adopt it. They became best friends."</strong>,
      <strong>"Story 2: A couple decided to surprise their elderly neighbor with a home-cooked meal, making her day!",</strong>
    ],
    Sad: [
        <strong>"Story 1: A boy lost his favorite toy but realized the value of the memories he had with it."</strong>,
        <strong>"Story 2: A woman felt lonely but soon reconnected with an old friend who made her feel much better.",</strong>
    ],
    Neutral: [
        <strong>"Story 1: It was a normal day for John, nothing special happened, but he enjoyed a calm and relaxing evening."</strong>,
      <strong>"Story 2: The weather was neither too sunny nor rainy, and people went about their day as usual.",</strong>
    ],
    Excited: [
        <strong>"Story 1: Lucy found out she had won tickets to her favorite band's concert and couldn't contain her excitement."</strong>,
        <strong>"Story 2: A family planned a surprise trip to Disneyland for their kids, and the children's reactions were priceless.",</strong>
    ],
    Tired: [
        <strong>"Story 1: After a long day at work, Jake came home, relaxed, and treated himself to a peaceful evening with a good book."</strong>,
        <strong>"Story 2: Lisa felt tired after running a marathon, but the sense of achievement was worth it!",</strong>
    ],
  };

  return (
    <div className="mood-stories">
      <h2>Stories To  Change Your Mood: {mood}</h2>
      {stories[mood] ? (
        <ul>
          {stories[mood].map((story, index) => (
            <li key={index}>{story}</li>
          ))}
        </ul>
      ) : (
        <p>No stories available for this mood.</p>
      )}
    </div>
  );
};

export default MoodStories;
