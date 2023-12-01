import React from "react";

type Props = {};

const CreateEvent = (props: Props) => {
  return (
    <div className="pt-20  flex flex-col lg:flex-row h- lg:h-screen">
      CreateEvent
      <div>
        <input type="text" placeholder="Name" />
      </div>
    </div>
  );
};

export default CreateEvent;
