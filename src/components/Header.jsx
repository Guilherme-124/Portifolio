export const Header = ({scroll}) => {
  return(
    <nav className="fixed bg-[var(--background-color)] w-screen z-900 justify-center transition-color 
      duration-300 shadow-[0_10px_20px_rgba(0,0,0,.5)]">
      <div
        className={`flex text-[1.5rem] w-85/100 m-auto justify-between transition-all duration-300
        ${scroll > 10
          ? "py-3"
          : "py-4"
        }
        `}
      >
        <div className="w-[60%] flex justify-around">
          <a 
            href="#home"
            className="hover:text-[var(--btn-color)] transition-color duration-200"
          >
            Home
          </a>
          <a 
            href="#about"
            className="hover:text-[var(--btn-color)] transition-color duration-200"
          >
            About
          </a>
          <a 
            href="#projects"
            className="hover:text-[var(--btn-color)] transition-color duration-200"
          >
            Projects
          </a>
        </div>
        <a 
          href="#"
          className="hover:text-[var(--btn-color)] transition-color duration-200"
        >
          Other Pages
        </a>
      </div>
    </nav>
  ); 
}