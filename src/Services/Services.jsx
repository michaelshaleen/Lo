import React from 'react'
import './services.css';

function Services() {
  return (
    <div>
      <ul className="nutrition">
        <p className="title">Nutrition</p>
        <li>One Time Consultation</li>
        <li>Monthly Coaching</li>
        <li>Six Month Plan</li>
        <li>Performance Nutrition</li>
      </ul>
      <ul className="programming">
        <p className="title">Programming</p>
        <li>CrossFit</li>
        <li>Powerlifting</li>
        <li>Body Composition Training</li>
      </ul>
    </div>
  )
}

export default Services;
