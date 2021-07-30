console.log(document.forms[0][0]);
console.log(document.forms.designer.words);

const designerForm = document.forms.designer;
const h1 = document.querySelector('h1');
const settings = JSON.parse(localStorage.getItem('settings')) || {} ;

h1.innerText = settings.words;
h1.style.backgroundColor = settings.bgColor;
h1.style.textAlign = settings.textAlign;

designerForm.addEventListener('submit', function(event) {
    // event.preventDefault();
    h1.innerText = designerForm.words.value;
    h1.style.backgroundColor = designerForm.bgColor.value;
    h1.style.color = designerForm.textColor.value;
    h1.style.padding = designerForm.padding.value + 'px';
    h1.style.textAlign = designerForm.textAlign.value;

    localStorage.setItem('settings', JSON.stringify({
        words: designerForm.words.value,
        bgColor: designerForm.bgColor.value,
        textAlign: designerForm.textAlign.value
    }))

});

