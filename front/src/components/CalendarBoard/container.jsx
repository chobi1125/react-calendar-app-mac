import { connect } from "react-redux";
import { createCalendar } from "../../services/calendar";
import CalendarBoard from "./presentation";
// store から必要な状態を選択して props の形にする関数
const mapStateToProps = state => ({ calendar: state.calendar });
const mergeProps = stateProps => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
