"use client";

import ClientIcon from './ClientIcon';

export const Navigator = ({ locations }: { locations: string[] }) => {
  return (
    <div className="flex bg-[#eaeaea] h-12 rounded-xl">
      <ClientIcon icon="ion:home" className="ml-10 my-auto opacity-30 w-[16px]" />
      {locations.map((location) => {
        return (
          <>
            <ClientIcon icon="ph:caret-right-thin" className="text-[65px] opacity-[0.02] ml-5 -mt-2 w-[65px]" />
            <p className="text-[#9ba0a7] my-auto font-semibold ml-5 slowLoad">{location}</p>
          </>
        )
      })}
    </div>
  )
}

export default Navigator;