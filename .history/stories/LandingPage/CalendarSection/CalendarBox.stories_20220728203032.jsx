import { CalendarBox } from '../../../src/components/ComponentIndex';

export default {
  title: 'CalendarBox',
  component: CalendarBox,
};

export const Main = {
  args: {
    title: "Lorem Ipsum",
    sched: [
      {
        place: "Lorem",
        time: "2:20PM",
        activity: "ipsum"
      }
    ]
  }
};