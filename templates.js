(() => {

    const general = () => {
        return `<div class="container">
        <div class="description">
            <h1>Try a virtual keyboard!</h1>
            <p>The virtual keyboard was created in macOS</p>
            <p>For switching language please use the control+space combination</p>
        </div>
        <textarea class="inp-text" name="testinput"></textarea>
        <div class="keyboard"></div>
        </div>`;
    };    

    const keyboard = () => {
        return `
        <div class="key-row">
            <div class="dynamic-row row-0">
            </div>   
            <button class="key-button delete-btn" data-code="Backspace">delete</button>
        </div>
        <div class="key-row">
            <button class="key-button tab-btn" data-code="Tab">tab</button>
            <div class="dynamic-row row-1">                
            </div>           
        </div>
        <div class="key-row">
            <button class="key-button caps-btn" data-code="CapsLock">caps lock</button>
            <div class="dynamic-row row-2">                
            </div>
        <button class="key-button enter-btn" data-code="Enter">enter</button>
        </div>
        <div class="key-row">
            <button class="key-button shift-btn" data-code="ShiftLeft">shift</button>
            <div class="dynamic-row row-3">                
            </div>           
            <button class="key-button shift-btn" data-code="ShiftRight">shift</button>
        </div>
        <div class="key-row">
            <button class="key-button fn-btn">fn</button>
            <button class="key-button control-btn" data-code="ControlLeft">control</button>
            <button class="key-button option-btn" data-code="AltLeft">option</button>
            <button class="key-button command-btn" data-code="MetaLeft">command</button>
            <button class="key-button space-btn" data-code="Space"></button>
            <button class="key-button command-btn" data-code="MetaRight">command</button>
            <button class="key-button option-btn" data-code="AltRight">option</button>
            <div class="arrow-wrap">
                <button class="key-button arrow-btn" data-code="ArrowLeft">&larr;</button>
                <div class="up-down-btn">
                    <button class="key-button arrow-btn" data-code="ArrowUp">&uarr;</button>
                    <button class="key-button arrow-btn" data-code="ArrowDown">&darr;</button>
                </div>
                <button class="key-button arrow-btn" data-code="ArrowRight">&rarr;</button>
            </div>
        </div>`;
    };

    const key = ({key, shiftedKey, code}) => {
        return `<button class="key-button" data-code="${code}">
        <span class="key-button__key">${key}</span>
        <span class="key-button__shifted">${shiftedKey}</span>
        </button>`;
    };

   
    window.templates = {
        keyboard,  
        key, 
        general,
    };
})();