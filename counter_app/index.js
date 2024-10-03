const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const resultEl = document.getElementById("result-el")


let count = 0

incrementBtn.addEventListener("click", function(){
    count += 1
    countEl.innerText = count
})


saveBtn.addEventListener("click", function(){
    resultEl.textContent += count + " - "
    countEl.innerText = 0
    count = 0
})