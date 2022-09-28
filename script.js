let nama = document.getElementById('input')
function isEmpty() {
    if (nama.value === "") {
        return true;
    }
    return false;
}
function execution(Str) {
    let resultPalindrom ="";
    for (let index = Str.length-1; index >= 0; index--) {
        resultPalindrom = resultPalindrom + Str[index] 
        
    }
    if (nama.value === resultPalindrom) {
        alert("Kalimat anda merupakan palindrom")
        return nama.value = resultPalindrom;
    }
    else{
        alert("Kalimat anda bukan merupakan palindrom")
        return nama.value = resultPalindrom;
    }
}
function output() {
    // 
    if (!isEmpty()) {
        execution(nama.value)
    }else{
        alert ("Masukkan Kalimat atau kata dahulu")
    }
}