export const About = () => {
  return(
    <section
      id="about" 
      className="p-10 grid grid-flow-col gap-[50px]"
    >
      <div>
        <h2 className=" text-[1.7rem] mb-1">First real contact</h2>
        <h3 className=" text-[1.4rem] ml-2">
          I took one course in Java and worked on some personal projects using Python and JavaScript,
          but my real journey into programming began when I enrolled in the CS50 course. Before that,
          I had a solid understanding of programming languages, but when it came to creating programs
          or websites, I often struggled with knowing where to start. Some problems felt overwhelming.
          At that time, I wasn't accustomed to using pseudocode to break down functions into smaller
          and more manageable parts, which made tackling problems much easier. Although I’ve improved
          since then, I still occasionally find myself relying on a text file to organize my thoughts.
        </h3>
      </div>
      <img 
        className="min-w-[300px] h-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGdKjrh-Z8L8IgKSN_hbzL2-wd5pPwGq7cg&s" 
        alt="random guy"
      />
    </section>
  );
}