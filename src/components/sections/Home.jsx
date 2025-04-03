export const Home = ({scroll}) => {
  return(
    <section 
      id="home"
      className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1595623654300-b27329804025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
    >
      <div 
        className="relative bg-[var(--background-color)] w-[40%] top-[50%] textBar group
        hover:w-[50%] transtition-all duration-700"
      >
        <div className="p-1 ml-[20%] flex flex-col">
          <h2 
            className="group-hover:ml-[10%] transtition-all duration-600"
          >
            My experience
          </h2>
          <h1 
            className="group-hover:ml-[13%] transtition-all duration-600"
          >
            with programing
          </h1>
        </div>
      </div>
      <div 
        className={`diagonal absolute top-0 right-0 w-3/100 h-screen bg-[var(--background-color)]
        hover:w-4/100 transition-all duration-500
        ${scroll > 100
          ? "w-full pointer-events-none border-b shadow-[0_10px_20px_rgba(100,100,100,.5)]"
          : ""
        }`}
      >
      </div>
    </section>
  );
}