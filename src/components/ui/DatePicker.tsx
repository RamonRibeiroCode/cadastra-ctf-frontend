import { useState } from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { globalCss } from "@stitches/react";
import ptBR from "date-fns/locale/pt-BR";

import DateLight from "@/icons/DateLight";
import Clock from "@/icons/Clock";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface DatePickerProps extends ReactDatePickerProps {
  type: "time" | "date";
}

const globalStyles = globalCss({
  ".ui-date-picker *": {
    // fontFamily: "Poppins",
  },
  ".ui-date-picker .react-datepicker__input-container": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "46px",
  },
  ".ui-date-picker input": {
    width: "100%",
    backgroundColor: "transparent",
    outline: 0,
    marginTop: "1px",
    paddingLeft: "56px",
    fontSize: "14px",
    color: "rgb(146, 146, 159)",
    "&::placeholder": {
      color: "#565674",
    },
  },
  ".ui-date-picker .react-datepicker__current-month": {
    textTransform: "capitalize",
  },
  ".ui-date-picker .react-datepicker.react-datepicker--time-only .react-datepicker__time-container":
    {
      width: "105px",
    },
  ".ui-date-picker .react-datepicker.react-datepicker--time-only .react-datepicker__time-box":
    {
      width: "105px",
    },
  ".ui-date-picker .react-datepicker.react-datepicker--time-only  .react-datepicker__triangle":
    {
      marginLeft: "-20px",
    },
});

function UIDatePicker({ type, ...otherProps }: DatePickerProps) {
  return (
    <div
      className={`w-full bg-[#1b1b29] relative flex justify-center items-center ui-date-picker ${globalStyles()}`}
    >
      <div className="mr-4 absolute left-4">
        {type === "date" ? (
          <DateLight width={20} height={20} />
        ) : (
          <Clock width={20} height={20} />
        )}
      </div>

      <DatePicker
        {...otherProps}
        locale="pt-BR"
        className="py-2 rounded-lg focus:border border-primary-light"
      />
    </div>
  );
}

export default UIDatePicker;
