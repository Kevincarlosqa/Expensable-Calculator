import styled from "@emotion/styled";

const StyledDate = styled.div`
  background-color: #f3f4f6;
`;

const date = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const StyledParagraph = styled.p`
  color: #4b5563;
`;

function CalendarDate() {
  return (
    <StyledDate>
      <StyledParagraph>
        {dayNames[date.getDay() - 1]} {monthNames[date.getUTCMonth() - 1]} ,
        {date.getUTCDate()}, {date.getFullYear()}
      </StyledParagraph>
    </StyledDate>
  );
}

export default CalendarDate;
