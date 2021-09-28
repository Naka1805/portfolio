search_btn.addEventListener("click",() =>{
    if (search_word.value != "" && file_name.value !="") {
        eel.main(search_word.value,file_name.value)    
    } else {
        alert("空欄をうめてください。")
    }
})

eel.expose(alertJs)
function alertJs(text){
    alert(text)
}

eel.expose(view_result)
function view_result(text) {
    result_list.value += (text + "\r\n")
}