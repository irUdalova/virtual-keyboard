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
            <button class="key-button delete-btn">delete</button>
        </div>
        <div class="key-row">
            <button class="key-button tab-btn">tab</button>
            <div class="dynamic-row row-1">                
            </div>           
        </div>
        <div class="key-row">
            <button class="key-button caps-btn">caps lock</button>
            <div class="dynamic-row row-2">                
            </div>
        <button class="key-button enter-btn">enter</button>
        </div>
        <div class="key-row">
            <button class="key-button shift-btn">shift</button>
            <div class="dynamic-row row-3">                
            </div>           
            <button class="key-button shift-btn">shift</button>
        </div>
        <div class="key-row">
            <button class="key-button fn-btn">fn</button>
            <button class="key-button control-btn">control</button>
            <button class="key-button option-btn">option</button>
            <button class="key-button command-btn">command</button>
            <button class="key-button space-btn"></button>
            <button class="key-button command-btn">command</button>
            <button class="key-button option-btn">option</button>
            <div class="arrow-wrap">
                <button class="arrow-button">&larr;</button>
                <div class="up-down-btn">
                    <button class="arrow-button">&uarr;</button>
                    <button class="arrow-button">&darr;</button>
                </div>
                <button class="arrow-button">&rarr;</button>
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