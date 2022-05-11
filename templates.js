(() => {
  const general = () => `<div class="container">
        <div class="description">
            <h1>Try the virtual keyboard!</h1>
            <p>The virtual keyboard was created in macOS</p>
            <p>For switching language please use the control+space combination</p>
        </div>
        <textarea class="inp-text" name="testinput"></textarea>
        <div class="keyboard"></div>
        </div>`;

  const keyboard = () => `
        <div class="key-row">
            <div class="dynamic-row row-0">
            </div>   
            <button class="key-button delete-btn" data-code="Backspace" data-key="Backspace">delete</button>
        </div>
        <div class="key-row">
            <button class="key-button tab-btn" data-code="Tab" data-key="Tab">tab</button>
            <div class="dynamic-row row-1">                
            </div>           
        </div>
        <div class="key-row">
            <button class="key-button caps-btn" data-code="CapsLock" data-key="CapsLock">caps lock</button>
            <div class="dynamic-row row-2">                
            </div>
        <button class="key-button enter-btn" data-code="Enter" data-key="Enter">enter</button>
        </div>
        <div class="key-row">
            <button class="key-button shift-btn" data-code="ShiftLeft" data-key="ShiftLeft">shift</button>
            <div class="dynamic-row row-3">                
            </div>           
            <button class="key-button shift-btn" data-code="ShiftRight" data-key="ShiftRight">shift</button>
        </div>
        <div class="key-row">
            <button class="key-button fn-btn">fn</button>
            <button class="key-button control-btn" data-code="ControlLeft" data-key="Control">control</button>
            <button class="key-button option-btn" data-code="AltLeft" data-key="Alt">option</button>
            <button class="key-button command-btn" data-code="MetaLeft" data-key="Meta">command</button>
            <button class="key-button space-btn" data-code="Space" data-key="Space"></button>
            <button class="key-button command-btn" data-code="MetaRight" data-key="Meta">command</button>
            <button class="key-button option-btn" data-code="AltRight" data-key="Alt">option</button>
            <div class="arrow-wrap">
                <button class="key-button arrow-btn" data-code="ArrowLeft" data-key="ArrowLeft">&larr;</button>
                <div class="up-down-btn">
                    <button class="key-button arrow-btn" data-code="ArrowUp" data-key="ArrowUp">&uarr;</button>
                    <button class="key-button arrow-btn" data-code="ArrowDown" data-key="ArrowDown">&darr;</button>
                </div>
                <button class="key-button arrow-btn" data-code="ArrowRight" data-key="ArrowRight">&rarr;</button>
            </div>
        </div>`;

  const keys = ({ key, shiftedKey, code }) => `<button class="key-button" data-code="${code}">
        <span class="key-button__key">${key}</span>
        <span class="key-button__shifted">${shiftedKey}</span>
        </button>`;

  window.templates = {
    keyboard,
    keys,
    general,
  };
})();
