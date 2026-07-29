import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Calendar() {
  const [currentMonth] = useState('Agustus 2026');

  const daysHeader = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa'
  ];

  const calendarDays = [
    { day: 31, isOtherMonth: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5, isEvent: true },
    { day: 6 },

    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13 },

    { day: 14 },
    { day: 15, isEvent: true },
    { day: 16 },
    { day: 17, isEvent: true },
    { day: 18, isEvent: true },
    { day: 19 },
    { day: 20 },

    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },

    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 1, isOtherMonth: true },
    { day: 2, isOtherMonth: true },
    { day: 3, isOtherMonth: true },
    { day: 4, isOtherMonth: true },
  ];

  return (
    <div className="calendar-widget">

      <div className="calendar-header">

        <button className="calendar-nav-btn">
          <ChevronLeft size={12} />
        </button>

        <span className="calendar-title">
          {currentMonth}
        </span>

        <button className="calendar-nav-btn">
          <ChevronRight size={12} />
        </button>

      </div>


      <div className="calendar-grid-header">

        {daysHeader.map((day) => (
          <div
            key={day}
            className="calendar-day-label"
          >
            {day}
          </div>
        ))}

      </div>


      <div className="calendar-grid-body">

        {calendarDays.map((item, index) => (
          <div
            key={index}
            className={`
              calendar-cell
              ${item.isOtherMonth ? 'other-month' : ''}
              ${item.isEvent ? 'event-day' : ''}
            `}
          >
            {item.day}
          </div>
        ))}

      </div>

    </div>
  );
}