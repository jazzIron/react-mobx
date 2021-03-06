import styled from '@emotion/styled';
import TUICalendar from '@toast-ui/react-calendar';
import TUICalendarInstance from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { calCalendars, calSchedules } from './CalOption.data';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { cssx, fonts } from '@src/theme';
import moment from 'moment';

export function Calendar() {
  const calendarRef = useRef<TUICalendar>(null);
  let calendarInstance: TUICalendarInstance | null = null;

  const today = new Date();
  const [calLabel, setCalLabel] = useState(String(today));
  const label = moment(calLabel).format('yyyy.MM');

  const getDate = (type: string, start: Date, value: number, operator: '+' | '-'): Date => {
    const date = new Date(start);
    type = type.charAt(0).toUpperCase() + type.slice(1);

    if (operator === '+') {
      type === 'date'
        ? date[`setDate`](date[`getDate`]() + value)
        : date[`setHours`](date[`getHours`]() + value);
    } else {
      type === 'date'
        ? date[`setDate`](date[`getDate`]() + value)
        : date[`setHours`](date[`getHours`]() + value);
    }

    return date;
  };

  const handleClickPrevButton = () => {
    if (calendarInstance) {
      calendarInstance.prev();
      labelFormat();
    }
  };

  const handleClickNextButton = () => {
    if (calendarInstance) {
      calendarInstance?.prev();
      labelFormat();
    }
  };

  const labelFormat = () => {
    setCalLabel(calendarInstance ? calendarInstance.getDate().toUTCString() : String(today));
  };

  useEffect(() => {
    if (calendarRef.current) calendarInstance = calendarRef.current.getInstance();
  });

  return (
    <>
      <CalendarTopper>
        <BtnToday>Today</BtnToday>
        <BtnArrowL>
          <MdKeyboardArrowLeft size="20" onClick={handleClickPrevButton} />
        </BtnArrowL>
        <BtnArrowR>
          <MdKeyboardArrowRight size="20" onClick={handleClickNextButton} />
        </BtnArrowR>
        <Datewrapper>{label}</Datewrapper>
      </CalendarTopper>

      <TUICalendar
        ref={calendarRef}
        height="700px"
        view="month" //???????????? ??????
        month={{
          //view='month'??? ??? ??????
          startDayOfWeek: 0, //????????? ?????? ??????
          daynames: ['???', '???', '???', '???', '???', '???', '???'],
        }}
        week={{
          //view='week'??? ??? ??????
          showTimezoneCollapseButton: true, //?????? ???????????? ?????? ?????? ?????? ??????(default = false)
          timezonesCollapsed: true, //?????? ?????? ????????? ?????? ??????(default = false)
          startDayOfWeek: 0,
          daynames: ['???', '???', '???', '???', '???', '???', '???'],
        }}
        disableDblClick={true} //?????? ???????????? ?????????
        disableClick={true} //?????? ?????? ?????????
        calendars={[...calCalendars]}
        template={{
          //?????? style custom
          milestone: function (schedule) {
            return (
              '<span style="color:red;"><i className="fa fa-flag"></i> ' +
              schedule.title +
              '</span>'
            );
          },
          milestoneTitle: function () {
            return 'Milestone';
          },
          task: function (schedule) {
            return '&nbsp;&nbsp;#' + schedule.title;
          },
          taskTitle: function () {
            return '<label><input type="checkbox" />Task</label>';
          },
          allday: function (schedule) {
            return schedule.title + ' <i className="fa fa-refresh"></i>';
          },
          alldayTitle: function () {
            return 'All Day';
          },
          time: function (schedule) {
            return schedule.title + ' <i className="fa fa-refresh"></i>' + schedule.start;
          },
          monthDayname: function (dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
          },
        }}
        timezones={[
          {
            timezoneName: 'KO',
            timezoneOffset: 540,
            displayLabel: 'GMT+09:00',
            tooltip: 'Seoul',
          },
          {
            timezoneName: 'LA',
            timezoneOffset: -420,
            displayLabel: 'GMT-08:00',
            tooltip: 'Los Angeles',
          },
        ]}
        useDetailPopup={false} //?????? ???????????? ?????? ?????? ??????(default = false)
        useCreationPopup={false} //?????? ?????? ?????? ?????? ??????(default = false)
        schedules={[...calSchedules]}
      />
    </>
  );
}

const CalendarTopper = styled.div`
  ${cssx.flexStart}
  margin-bottom: 15px;
  > * + * {
    margin-left: 6px;
  }
  > button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 25px;
    border: 1px solid #ddd;
    ${fonts.body_02}
    line-height: 30px;
    color: #333;
  }
`;
const BtnToday = styled.button`
  padding: 0 16px;
`;
const BtnArrowL = styled.button`
  svg {
    margin: 5px;
  }
`;
const BtnArrowR = styled.button`
  svg {
    margin: 5px;
  }
`;
const Datewrapper = styled.span``;
