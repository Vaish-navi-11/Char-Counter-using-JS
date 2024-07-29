function charcountupdate(str) {
    var charCount = 0;
    if (str.length <=50) {
    for (var i = 0; i < str.length; i++) {
        if (str[i]!== " ") {
            charCount++;
        }
    }
    document.getElementById("charcount").innerHTML = "Total Character : "+ charCount ;
    document.getElementById("charcountriv").innerHTML = "Remaining Character : "+ (50-charCount) ;
}
else{
    alert("Character limit reached!");
    document.querySelector(".textbox").value = str.substr(0, 49);
    charcountupdate(document.querySelector(".textbox").value);
}}
function clear() {
    document.querySelector(".textbox").value = '';
    document.getElementById('charcount').textContent = 'Total Character : 0';
    document.getElementById('charcountriv').textContent = 'Remaining Character : 50';
}