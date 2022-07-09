button = document.getElementById('call');

button.addEventListener("click", myFunction);

async function myFunction() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    if (dd == 09 || dd == 10) {
    serialnum = document.getElementById('serialnum').value;
    let url = `http://studentapi.earthlink.iq/api/search/${serialnum}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            if (myJson.url) {
                document.getElementById("add-2").innerHTML = (`<a class="btn btn-outline-primary" href="${myJson.url}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg> تحميل</a>`);
            }
        }).catch(() => {
            document.getElementById("add-2").innerHTML = ('<p class="text-danger">الرقم غير موجود, أعد المحاولة</p>');
        });}
}
