import React from "react";

const MoodHistory = ({ history }) => {
    return (
        <div className="mood-history">
            <h2>Mood History</h2>
            {history.length === 0 ? (
                <p>No moods selected yet.</p>
            ) : (
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>
                            {entry.mood} at {entry.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoodHistory;
