import NavBar from '@/components/common/NavBar';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';

function Calendar() {
  return (
		<div>
      <NavBar />
			<FullCalendarBox size="big" />
		</div>
	);
}

export default Calendar;