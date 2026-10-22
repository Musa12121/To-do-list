const addButton=document.getElementById('add-button');
const list=document.getElementById('item-list');
const input=document.getElementById('text-input');

addButton.addEventListener('click',(e)=>{
    e.preventDefault()
    if(!input.value.trim())return
    const listItem=document.createElement('li')
    listItem.textContent=input.value.trim()
    list.append(listItem)
    input.value='';
})