export const ProjectOpen = ({index, setOpenMore}) => {
  return (
    <>
      <div 
        onClick={() => {
          setOpenMore(false);
        }}
        className="fixed top-0 right-0 h-screen w-full bg-black opacity-[0.3] z-850">
      </div>
      <div className="fixed flex bg-[rgba(20,20,20)] w-[70%] right-[15%] top-[60px] bottom-0 
        rounded m-auto gap-[15px] z-900">
        <div className="grid grid-cols-2 p-0">
          <div className="p-[12px] overflow-y-auto">
            <img 
              className="rounded w-full"
              src="https://media.istockphoto.com/id/1289411982/pt/foto/cyber-security-web-development-and-work-in-it-concept.jpg?s=2048x2048&w=is&k=20&c=3uzSkOhDiY2v7piHP4mSTiGPXg4D0U--Q-dzg_ORUxM=" 
              alt="project image" 
            />
            <div>
              <h1 className="text-[1.7rem]">title {index+1}</h1>
              <h2 className="text-[1.4rem] flex-wrap">I'm currently working on some small backend stuff
                that i plan to do to deploy the programs and codes in here
              </h2>
            </div>
          </div>
          <div className="bg-white text-black text-[1.4rem] rounded p-3 
            shadow-[inset_0px_0px_10px_rgba(10,10,10,.5)] overflow-auto">
            <p>i will finish this pop up window later</p>
            <p>for now i'm working in other parts of the portifolio</p>
            <p>and yes, i will make it also work in mobile</p>
            <p>although i didnt make it mofile first</p>
          </div>
        </div>
      </div>
    </>
  );
}