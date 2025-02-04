"use client"

import React, { useState } from "react";
export const Data = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const resources = [
        {
          title: "Data Structures & Algorithms",
          description: "Master DSA with in-depth explanations and coding examples.",
          link: "#",
          style: "bg-blue-100 border-l-4 border-blue-500",
        },
        {
          title: "Web Development Guide",
          description: "Learn front-end and back-end development step by step.",
          link: "#",
          style: "bg-green-100 border-l-4 border-green-500",
        },
        {
          title: "Machine Learning Basics",
          description: "Get started with ML concepts and hands-on projects.",
          link: "#",
          style: "bg-yellow-100 border-l-4 border-yellow-500",
        },
        {
          title: "Cyber Security Essentials",
          description: "Understand ethical hacking, encryption, and online security.",
          link: "#",
          style: "bg-red-100 border-l-4 border-red-500",
        },
        {
          title: "Artificial Intelligence",
          description: "Dive into AI concepts, neural networks, and deep learning.",
          link: "#",
          style: "bg-purple-100 border-l-4 border-purple-500",
        },
        {
          title: "Cloud Computing",
          description: "Learn about AWS, Azure, and Google Cloud services.",
          link: "#",
          style: "bg-indigo-100 border-l-4 border-indigo-500",
        },
        {
          title: "DevOps & CI/CD",
          description: "Master deployment strategies and automation techniques.",
          link: "#",
          style: "bg-teal-100 border-l-4 border-teal-500",
        },
        {
          title: "Blockchain Technology",
          description: "Explore the fundamentals of blockchain and cryptocurrency.",
          link: "#",
          style: "bg-orange-100 border-l-4 border-orange-500",
        }
      ];
      const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return (
        <div className="min-h-screen bg-white py-5 pb-20">
          {/* Search Bar */}
          <div className="container mx-auto px-5 py-5 mb-10">
            <input
              type="text"
              placeholder="Search Resources..."
              className="input input-info bg-white w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
    
          {/* Resource Cards Section */}
          <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className={`card shadow-xl hover:shadow-2xl transition duration-300 ${resource.style}`}
              >
                <div className="card-body">
                  <h2 className="card-title">{resource.title}</h2>
                  <p>{resource.description}</p>
                  <div className="card-actions justify-end lg:justify-center">
                    <a href={resource.link} className="py-2 px-5 border-2 border-blue-600 rounded-full text-sm font-bold text-white bg-blue-600">Download</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
