function extractText() {
    let text = document.querySelectorAll("ul#items li");
    let result = document.getElementById("result");

    for (const el of text) {
        result.textContent += el.textContent + "\n";
        
    }
}