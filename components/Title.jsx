import React from 'react'

const Title = ({title,des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-dark tracking-wide md:ml-8 sm:ml-8">
       {title}
      </h3>
      <h1 className="text-4xl font-bold capitalize text-[#5651e5] md:ml-8 sm:ml-8">{des}</h1>
    </div>
  );
}

export default Title