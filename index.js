/* global templates, layouts */
// ====================render page app==============================
class Keyboard {
  isShifted = false;

  isCapsLocked = false;

  isControled = false;

  isSpaced = false;

  constructor(element, layouts, lang) {
    this.element = element;
    this.layouts = layouts;
    this.lang = lang;
    this.renderGeneral();
    this.keyboard = element.querySelector(".keyboard");
    this.renderStatic();
    this.renderDynamic();
    this.input = this.element.querySelector(".inp-text");
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    this.keyboard.addEventListener("mousedown", this.handleVirtualKey);
    this.keyboard.addEventListener("mouseup", this.handleVirtualKey);
  }

  get layout() {
    return this.layouts[this.lang];
  }

  onKeyDown = (event) => {
    const isInputFocused = event.target === this.input;
    const keyEl = this.element.querySelector(`[data-code=${event.code}]`);
    if (!keyEl) {
      return;
    }
    keyEl.classList.add("pressed");
    if (!isInputFocused && event.key.length === 1) {
      this.input.value += event.key;
    }

    if (event.key === "Shift") {
      this.isShifted = true;
      this.element.classList.add("shifted");
    }

    if (event.key === "CapsLock") {
      this.isCapsLocked = true;
      this.element.classList.add("capslocked");
    }

    if (event.key === "Backspace") {
      this.input.value = this.input.value.substring(0, this.input.value.length - 1);
    }

    if (event.key === "Control") {
      this.isControled = true;
    }

    if (event.code === "Space" && this.isControled) {
      event.preventDefault();
      this.switchLanguage();
      return;
    }

    const keyValue = {
      Tab: "\t",
      ArrowLeft: "←",
      ArrowUp: "↑",
      ArrowDown: "↓",
      ArrowRight: "→",
      Enter: "\n",
      Space: " ",
    };

    if (keyValue[event.code]) {
      event.preventDefault();
      this.input.value += keyValue[event.code];
    }
  };

  switchLanguage() {
    const langs = Object.keys(this.layouts);
    const langIndex = langs.indexOf(this.lang);

    this.lang = (langIndex === langs.length - 1)
      ? langs[0]
      : langs[langIndex + 1];
    this.renderDynamic();
  }

  onKeyUp = (event) => {
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

    if (event.key === "Control") {
      this.isControled = false;
    }

    if (event.key === "Space") {
      this.isSpaced = false;
    }
  };

  renderGeneral() {
    this.element.innerHTML = templates.general();
  }

  renderStatic() {
    this.keyboard.innerHTML = templates.keyboard();
  }

  renderDynamic() {
    this.layout.forEach((row, i) => {
      const el = this.element.querySelector(`.row-${i}`);
      el.innerHTML = row.map(templates.keys).join("");
    });
  }

  handleVirtualKey = (event) => {
    const eventsMap = {
      mousedown: "keydown",
      mouseup: "keyup",
    };
    let eventType = eventsMap[event.type];
    const btn = event.target.closest(".key-button");
    if (!btn) {
      return;
    }
    const { code } = btn.dataset;
    const selector = this.isShifted
      ? ".key-button__shifted"
      : ".key-button__key";
    const key = btn.querySelector(selector)?.textContent || btn.dataset.key;

    if (!key) {
      return;
    }

    if (code === "CapsLock") {
      if (event.type === "mouseup") {
        return;
      }
      eventType = this.isCapsLocked ? "keyup" : "keydown";
    }
    document.dispatchEvent(new KeyboardEvent(eventType, { key, code }));
  };
}

window.keyboard = new Keyboard(document.body, layouts, "en");
