import { useEffect, useRef } from "react";

export const Project = ({index, setOpenMore, focus, setFocus}) => {
  const projectRef = useRef(null);

  useEffect(() => {
    const project = projectRef.current;
    let timer = 0;

    const handleFocus = (event) => {
      if (event.type == 'click') {
        if (focus) {
          setOpenMore(true);
        } else {
          setFocus(true);
        }
      } else {
        timer = setTimeout(() => {
          setFocus(true);
        }, 800);
      }
    };

    const handleTimer = () => clearTimeout(timer);

    const projectEvents = [
      {type: "mouseenter", handler: handleFocus},
      {type: "mouseleave", handler: handleTimer},
      {type: "click", handler: handleFocus},
    ];
    projectEvents.forEach(({type, handler}) => {project.addEventListener(type, handler)}); 
      return() => {
        projectEvents.forEach(({type, handler}) => {project.removeEventListener(type, handler)});
      };
  },);

  return (
    <div 
      id={`project${index+1}`}
      data-index={index+1}
      ref={projectRef}
      className="inline-block overflow-hidden rounded relative"
    >
      <img 
        className={`w-full h-auto transition-transform duration-300 z-500
          ${focus
            ? "scale-105"
            : "hover:scale-105"
          }  
        `}
        src="https://media.istockphoto.com/id/1289411982/pt/foto/cyber-security-web-development-and-work-in-it-concept.jpg?s=2048x2048&w=is&k=20&c=3uzSkOhDiY2v7piHP4mSTiGPXg4D0U--Q-dzg_ORUxM=" 
        alt="Some Project" 
      />
      <div 
        className={`absolute top-100 right-0 w-full h-0 bg-opacity- z-600
        px-1 pb-1 transition-all duration-200 text-[2vw]
        backdrop-blur-[1px] backdrop-brightness-70
        ${focus
          ? "h-[40%] top-[60%]"
          : ""
        }
        `}  
      >
        <div className="absolute opacity-100">
          <h1>Name</h1>
          <h2>description</h2>
        </div>
      </div>
    </div>
  );
}