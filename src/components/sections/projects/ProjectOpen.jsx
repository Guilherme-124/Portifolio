import { TextArea } from "../../Printer";

export const ProjectOpen = ({ index, setOpenMore }) => {
  const program = `  const projectRef = useRef(null);

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

    const handleUnfocus = () => clearTimeout(timer);

    const projectEvents = [
      {type: "mouseenter", handler: handleFocus},
      {type: "mouseleave", handler: handleUnfocus},
      {type: "click", handler: handleFocus},
    ];
    projectEvents.forEach(({type, handler}) => {project.addEventListener(type, handler)}); 
      return() => {
        projectEvents.forEach(({type, handler}) => {project.removeEventListener(type, handler)});
      };
  },);`;
  const description = `I'm currently working on some small backend stuff that i plan to do to deploy the programs and codes in here`;

  return (
    <>
      <div
        onClick={() => {
          setOpenMore(false);
        }}
        className="fixed top-0 right-0 h-screen w-full bg-black opacity-[0.3] z-850"
      ></div>
      <div
        className="fixed flex bg-[rgba(20,20,20)] w-[70%] right-[15%] top-[60px] bottom-0 
        rounded m-auto gap-[15px] z-900"
      >
        <div className="grid grid-cols-2 p-0">
          <div className="p-[12px] overflow-y-auto">
            <img
              className="rounded w-full"
              src="https://media.istockphoto.com/id/1289411982/pt/foto/cyber-security-web-development-and-work-in-it-concept.jpg?s=2048x2048&w=is&k=20&c=3uzSkOhDiY2v7piHP4mSTiGPXg4D0U--Q-dzg_ORUxM="
              alt="project image"
            />
            <div>
              <h1 className="text-[1.6rem]">title {index + 1}</h1>
              <TextArea text={description} mode={false} />
            </div>
          </div>
          <div
            className="bg-[var(--background-color)] text-black text-[1.4rem] rounded p-3 
            shadow-[inset_0px_0px_10px_rgba(10,10,10,.5)] overflow-auto whitespace-nowrap"
          >
            <TextArea text={program} code={true} />
          </div>
        </div>
      </div>
    </>
  );
};
