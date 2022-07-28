import React from 'react'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarContent = ({content}) => {
  return (
    {Calendar && Calendar.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <CalendarBox
              title={item.title}
            />
          </React.Fragment>
          );
        })}
    
  )
}

export default CalendarContent