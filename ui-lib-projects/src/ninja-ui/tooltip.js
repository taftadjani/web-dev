import './style/tooltip.css';
class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init() {
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', _ => {
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', _ => {
            tip.classList.remove('active');
        })
    }
}

export { Tooltip as default }