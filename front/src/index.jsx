import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Navigation from "./components/Navigation/container"
import { Provider } from "react-redux";
import { createStore } from "redux";
// 全レデューサーの読み込み
import rootReducer from "./redux/rootReducer";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

dayjs.locale("ja");
// storeの作成
const store = createStore(rootReducer);
// Appコンポーネントでカレンダーボードコンポーネントの呼び出し
const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
