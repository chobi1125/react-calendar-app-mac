import { connect } from "react-redux";
import { createCalendar } from "../../services/calendar";
import { 
  addScheduleOpenDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import CalendarBoard from "./presentation";
// store から必要な状態を選択して props の形にする関数
const mapStateToProps = state => ({ calendar: state.calendar });
const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: d => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);