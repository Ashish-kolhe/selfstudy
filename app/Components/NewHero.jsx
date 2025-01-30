"use client"
import React, { useState, useRef } from "react";

const NewHero = () => {
  const [search, setSearch] = useState("");
  const cardRefs = useRef([]); // Store refs for each card

  const cards = [
    { id: 1, title: "React for Beginners", description: "Learn React from scratch!" },
    { id: 2, title: "Advanced JavaScript", description: "Master JavaScript concepts." },
    { id: 3, title: "UI/UX Design Fundamentals", description: "Improve your design skills." },
    { id: 4, title: "Full-Stack Development", description: "Become a MERN stack expert." },
    { id: 5, title: "Python for Data Science", description: "Analyze data with Python." },
  ];

  const handleSearch = () => {
    const index = cards.findIndex((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );

    if (index !== -1) {
      cardRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="hero bg-white text-gray-800 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search for a course..."
              className="input input-bordered input-info w-full max-w-xl bg-white text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Course Cards */}
          <div className="mt-10">
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card card-side bg-white text-gray-900 shadow-xl my-8"
              >
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt={card.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
