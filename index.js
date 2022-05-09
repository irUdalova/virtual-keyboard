// ====================render page app==============================
class Keyboard {
  isShifted = false;
  isCapsLocked = false;
  constructor(element, layouts, lang) {
    this.element = element;
    this.layouts = layouts;
    this.lang = lang;
    this.renderGeneral();
    this.renderStatic();
    this.renderDynamic();
    this.input = this.element.querySelector(".inp-text");
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  get layout() {
    return this.layouts[this.lang];
  }

  onKeyDown = (event) => {
    console.log(event);
    const isInputFocused = event.target === this.input;
    const keyEl = this.element.querySelector(`[data-code=${event.code}]`);
    if (!keyEl) {
      return;
    }
    keyEl.classList.add("pressed");
    if (!isInputFocused && event.key.length === 1) {
      this.input.value += event.key;
      console.log(isInputFocused);
    }

    if (event.key === "Shift") {
      this.isShifted = true;
      this.element.classList.add("shifted");
    }

    if (event.key === "CapsLock") {
      this.isCapsLocked = true;
      this.element.classList.add("capslocked");
    }

    const keyValue = {
      Tab: "\t",
      ArrowLeft: "←",
      ArrowUp: "↑",
      ArrowDown: "↓",
      ArrowRight: "→",
    };

    if (keyValue[event.key]) {
      event.preventDefault();
      this.input.value += keyValue[event.key];
    }
  };

  onKeyUp = (event) => {
    console.log(event);
    const keyEl = this.element.querySelector(`[data-code=${event.code}]`);
    if (!keyEl) {
      return;
    }
    keyEl.classList.remove("pressed");

    if (event.key === "Shift") {
      this.isShifted = false;
      this.element.classList.remove("shifted");
    }

    if (event.key === "CapsLock") {
      this.isCapsLocked = false;
      this.element.classList.remove("capslocked");
    }
  };

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
