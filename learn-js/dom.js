const body = document.querySelector('body');
export const styleBody = _ => {
    body.style.background = "peachpuff";
};
const myMail = "taftadjani@gmail.com";
export const addTitle = text => {
    const title = document.querySelector('h1');
    title.textContent = text;
    body.appendChild(title);
};
export { myMail };