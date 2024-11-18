import React from "react";

function TitleHead({ tag, title, icon }) {
  return (
    <div className=' flex flex-col justify-center items-center gap-6'>
      <div>
        <p className=' flex justify-center items-center gap-2 text-md text-accent border border-accent rounded-full px-8 py-2'>
          <span>{icon} </span> {tag}
        </p>
      </div>
      <h2 className='text-4xl md:text-5xl font-medium text-center tracking-tighter capitalize'>
        {title}
      </h2>
    </div>
  );
}

export default TitleHead;
