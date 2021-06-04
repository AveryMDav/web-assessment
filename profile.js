
document.querySelector('#color').addEventListener('click', favColor)
document.querySelector('#place').addEventListener('click', favPlace)
document.querySelector('#ritual').addEventListener('click', favRitual)

function favColor(evt){
    evt.preventDefault()
    alert('Red!')
}

function favPlace(evt){
    evt.preventDefault()
    alert('Portland!')
}

function favRitual(evt){
    evt.preventDefault()
    alert('Having a cup of tea every morning!')
}