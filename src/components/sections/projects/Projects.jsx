import { Project } from "./Project";
import { ProjectOpen } from "./ProjectOpen";
import { useState } from "react";

export const Projects = () => {
  const [focus, setFocus] = useState(Array(4).fill(false));
  const [openMore, setOpenMore] = useState(Array(4).fill(false));

  const updateFocus = (index) => {
    setFocus(focus.map((_, i) => i === index));
  };
  const openProjectWindow = (index, state) => {
    setOpenMore((prev) => prev.map((item, i) => (i === index ? state : item)));
  };

  return(
    <section
      id="projects"
      className="h-screen w-full p-10"
    >
      <h1 className="text-center text-[3rem]">Projects</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-[70px] p-[30px]">
        {Array(4).fill(null).map((_, index) => (
          <div>
            <Project 
              index={index}
              focus={focus[index]}
              setFocus={() => updateFocus(index)}
              openMore={openMore[index]}
              setOpenMore={(state) => openProjectWindow(index, state)}
            />
            {openMore[index] && 
              <ProjectOpen 
                index={index}
                openMore={openMore[index]}
                setOpenMore={(state) => openProjectWindow(index, state)}
              />
            }
          </div>
        ))}
      </div>
    </section>
  );
}