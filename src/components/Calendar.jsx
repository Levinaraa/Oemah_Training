import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar() {
  const [currentMonth] = useState('Agustus 2026');

  // Days matrix for August 2026
  // Highlighted event days: 5, 15, 17, 18
  const daysHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const calendarDays = [
    { day: 31, isOtherMonth: true },
    { day: 1, isOtherMonth: false },
    { day: 2, isOtherMonth: false },
    { day: 3, isOtherMonth: false },
    { day: 4, isOtherMonth: false },
    { day: 5, isOtherMonth: false, isEvent: true },
    { day: 6, isOtherMonth: false },
    { day: 7, isOtherMonth: false },
    { day: 8, isOtherMonth: false },
    { day: 9, isOtherMonth: false },
    { day: 10, isOtherMonth: false },
    { day: 11, isOtherMonth: false },
    { day: 12, isOtherMonth: false },
    { day: 13, isOtherMonth: false },
    { day: 14, isOtherMonth: false },
    { day: 15, isOtherMonth: false, isEvent: true },
    { day: 16, isOtherMonth: false },
    { day: 17, isOtherMonth: false, isEvent: true },
    { day: 18, isOtherMonth: false, isEvent: true },
    { day: 19, isOtherMonth: false },
    { day: 20, isOtherMonth: false },
    { day: 21, isOtherMonth: false },
    { day: 22, isOtherMonth: false },
    { day: 23, isOtherMonth: false },
    { day: 24, isOtherMonth: false },
    { day: 25, isOtherMonth: false },
    { day: 26, isOtherMonth: false },
    { day: 27, isOtherMonth: false },
    { day: 28, isOtherMonth: false },
    { day: 29, isOtherMonth: false },
    { day: 30, isOtherMonth: false },
    { day: 1, isOtherMonth: true },
    { day: 2, isOtherMonth: true },
    { day: 3, isOtherMonth: true },
    { day: 4, isOtherMonth: true },
  ];

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <button className="calendar-nav-btn"><ChevronLeft size={16} /></button>
        <span className="calendar-title">{currentMonth}</span>
        <button className="calendar-nav-btn"><ChevronRight size={16} /></button>
      </div>

      <div className="calendar-grid-header">
        {daysHeader.map((d) => (
          <div key={d} className="calendar-day-label">{d}</div>
        ))}
      </div>

      <div className="calendar-grid-body">
        {calendarDays.map((item, idx) => (
          <div
            key={idx}
            className={`calendar-cell ${
              item.isOtherMonth ? 'other-month' : ''
            } ${item.isEvent ? 'event-day' : ''}`}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}
