"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import toast from "react-hot-toast";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    satisfaction: "",
    rating: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Initialize router for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSatisfactionChange = (value) => {
    setFormData({ ...formData, satisfaction: value });
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xvgznngl", {
        // Replace with your Formspree ID
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Feedback submission failed");
      }

      toast.success("Thank you for your feedback!");
      router.push("/feedbackConfirmation"); // Redirect to confirmation page after success
    } catch (err) {
      toast.error("Failed to submit feedback. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Give Us Feedback
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="feedback"
              className="block text-gray-700 font-semibold mb-1"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Poll: Satisfaction Level */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              How satisfied are you with our tool?
            </label>
            <div className="space-y-2">
              {[
                "Very Satisfied",
                "Satisfied",
                "Neutral",
                "Dissatisfied",
                "Very Dissatisfied",
              ].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="satisfaction"
                    value={option}
                    checked={formData.satisfaction === option}
                    onChange={() => handleSatisfactionChange(option)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Rating: 1-5 Stars */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Rate Our Tool (1-5 Stars)
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    formData.rating >= star
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  } hover:bg-yellow-500 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
