import React from 'react'
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarContent = () => {
  return (
    <div>
        {Calendar && Calendar.map((item, i) => {
            return (
              <React.Fragment key={item.title}>         
                <div>
                  {item.content[i]}
                </div>
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarContent