function encodeAndDecodeMessages() {
    
    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event){
        let newMsg = '';
        let currnetText = event.target.parentElement.children[1].value;

        for (let index = 0; index < currnetText.length; index++) {
            let currCh = currnetText[index].charCodeAt();
            newMsg += String.fromCharCode(currCh + 1);
            
        }
        let textAreas = document.querySelectorAll("textarea");
        let resultTextarea = textAreas[1];
        resultTextarea.value = newMsg;
        let currentTextArea = textAreas[0];
        currentTextArea.value = '';
    }
    function decode(event){

        let currentArea = event.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMsg = '';

        for (let index = 0; index < currentText.length; index++) {

            let ch = currentText[index].charCodeAt();
            resultMsg += String.fromCharCode(ch - 1);
            
        }

        currentArea.value = resultMsg;

    }
}