import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";

// 日付の関数をカレンダー定数に代入。カレンダーコンポーネントで呼び出す用
const days = ["日", "月", "火", "水", "木", "金", "土"];
// カレンダーボードコンポーネント
const CalendarBoard = ({ calendar, month }) => {
  console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
          <Typography
            className={styles.days}
            color="textSecondary"
            align="center"
            variant="caption"
            component="div"
          >
            {d}
          </Typography>
        </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} month={month}/>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;