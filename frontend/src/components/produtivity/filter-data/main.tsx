import { useState, useRef, useEffect  } from "react";
import * as S from "./styles"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";

interface FilterDateProps {
  setSelectDate: (selectDate: {startDate: Date, endDate: Date}) => void,
}

const FilterDate: React.FC<FilterDateProps> = ({ setSelectDate }) => {
  const [range, setRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleCalendar = () => setOpen(!open);

  useEffect(() => {
    setSelectDate({startDate: range[0].startDate, endDate: range[0].endDate});
  }, [range])

  return (
    <S.Wrapper>
    <input
      type="text"
      readOnly
      onClick={toggleCalendar}
      value={`${range[0].startDate.toLocaleDateString()} - ${range[0].endDate.toLocaleDateString()}`}
    />
    {open && (
      <div className="calendar">
        <DateRange
          ranges={range}
          onChange={(item :any) => {setRange([item.selection])}}
          showPreview={false}
          showDateDisplay={false}
          moveRangeOnFirstSelection={false}
        /> 
      </div>
    )}
    </S.Wrapper>
  )
};


export default FilterDate