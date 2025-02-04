"use client"
import React, { useState } from "react";

const NewHero = () => {
  const [search, setSearch] = useState("");

  const courses = [
    { id: 1, title: "React for Beginners", description: "Learn React from scratch!", image: "./physics.gif", style: "bg-white border-l-4 border-blue-500" },
    { id: 2, title: "Advanced JavaScript", description: "Master JavaScript concepts.", image: "./java.gif", style: "bg-white border-l-4 border-green-500" },
    { id: 3, title: "UI/UX Design Fundamentals", description: "Improve your design skills.", image: "./ui.gif", style: "bg-white border-l-4 border-yellow-500" },
    { id: 4, title: "Full-Stack Development", description: "Become a MERN stack expert.", image: "./website.gif", style: "bg-white border-l-4 border-red-500" },
    { id: 5, title: "Python for Data Science", description: "Analyze data with Python.", image: "./analytics.gif", style: "bg-white border-l-4 border-purple-500" },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white py-10">
      {/* Search Bar */}
      <div className="container mx-auto px-5 mb-10">
        <input
          type="text"
          placeholder="Search for a course..."
          className="input input-info w-full bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Course Cards Section */}
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className={`card shadow-xl hover:shadow-2xl transition duration-300 ${course.style}`}>
            <figure>
              <img src={course.image} alt={course.title} className="w-1/2 object-cover rounded-t-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Enroll</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHero;