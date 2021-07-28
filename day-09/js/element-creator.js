console.log(document.forms[0].words);
console.log(document.forms.designer.words.value);

const designerForm = document.forms.designer;
const h1 = document.querySelector('h1');
designerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    h1.innerText = designerForm.words.value;
    h1.style.backgroundColor = designerForm.bgColor.value;
    h1.style.color = designerForm.textColor.value;
    h1.style.padding = designerForm.padding.value + 'px';
    h1.style.textAlign = designerForm.textAlign.value;
});

