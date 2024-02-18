import React from "react";

const MainDetails = ({name, address}) => {
  return (
    <>
      <section className="flex items-end flex-col justify-end">
        {/* <input type='text' name='text' id='text' placeholder='Enter your name' /> */}
        <h2 className="font-bold text-xl uppercase md: text-4xl">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
};

export default MainDetails;
