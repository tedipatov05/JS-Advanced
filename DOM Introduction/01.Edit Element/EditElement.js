function editElement(ref, match, replacer) {
    let text = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let edit = text.replace(matcher, replacer);
    ref.textContent = edit;

    
}