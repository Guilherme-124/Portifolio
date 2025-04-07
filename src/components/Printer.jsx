export const TextArea = ({ type }) => {
  const Program = `window.onload = function () {
    setTimeout(function () {
        document.getElementById('transition').classList.remove('closed');
        // I know that i should avoid using .style instead of the classlist
        // i used a .style here becouse it will be done only once and it will stay like this after
        document.querySelector('.text-bar').style.color = 'var(--text-color)';
    }, 300);

    document.querySelectorAll('.project img').forEach(img => {
        let timer;
        let parent = img.closest('div[id]');
        if (!parent) return;

        img.addEventListener('click', function () {
            parent.classList.add('hovered');
        });

        img.addEventListener('mouseenter', function () {

            timer = setTimeout(function () {
                parent.classList.add('hovered');
            }, 800);
        });

        parent.addEventListener('mouseleave', function () {
            clearTimeout(timer);
            setTimeout(function () {
                parent.classList.remove('hovered');
            }, 150);
        });
    });
};`;
  return (
    <> {/* this will be the component responsible for printing the formated text in the code container
          and printing the text in the description area */}
      <h1>
      </h1>
    </>
  );
};
