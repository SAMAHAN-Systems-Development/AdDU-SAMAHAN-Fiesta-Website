import React from 'react'
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarContent = ({content}) => {
  return (
    <div>
        {Calendar && Calendar.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            {item.content[i]}
          </React.Fragment>
          );
        })}
    </div>
  )
}

export default CalendarContent