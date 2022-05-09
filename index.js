class Keyboard {
  constructor(element, layouts, lang) {
    this.element = element;
    this.layouts = layouts;
    this.lang = lang;
    this.renderGeneral();
    this.renderStatic();
    this.renderDynamic();
  }

  get layout() {
    return this.layouts[this.lang];
  }

  renderGeneral() {
    this.element.innerHTML = templates.general();
  }

  renderStatic() {
    this.element.querySelector(".keyboard").innerHTML = templates.keyboard();
  }

  renderDynamic() {
    this.layout.forEach((row, i) => {
      const el = this.element.querySelector(`.row-${i}`);
      el.innerHTML = row.map(templates.key).join("");
    });
  }
}

new Keyboard(document.body, layouts, "en");
