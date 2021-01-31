import React from "react";

export const EventDescription = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <p> {props.match.params.id}</p>
    </div>
  );
};
export default EventDescription;
