class MyCounter extends HTMLElement {
    value = 0;
    allowNegative=true;
    constructor() {
      super();
        const template = document.getElementById('counter');
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.shadowRoot.getElementById('plus').addEventListener('click', this.increment);
        this.shadowRoot.getElementById('minus').addEventListener('click', this.decrement);
        const allowNegativeAttr = this.getAttribute('allowNegative') || "true";
        this.allowNegative = allowNegativeAttr==="true"
        this.value = parseInt(this.getAttribute('initValue')) || 0;
        this.render();

    }
    render(){
        this.shadowRoot.getElementById('value').textContent = this.value;
    }
    increment(){
        this.value += 1;
        this.render();
    }
    decrement(){
        if(!this.allowNegative && this.value<=0){
            return;
        }
        this.value -= 1;
        this.render();
    }
  }
  customElements.define("custom-counter", MyCounter);