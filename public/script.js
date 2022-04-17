var downloadBtn = document.querySelector(".downloadBtn");
var input = document.querySelector(".input");
downloadBtn.addEventListener("click", () => {
    getUrl(input.value);
})
async function  getUrl(url) {
    try {
        let data = await fetch("/download?URL=" + url)
        if(data.status == 200){
            console.log("Success");
            window.location.href = data.url;
        }
    } catch (error) {
        alert("Algo deu errado!");
    }

}

console.log("Server is working");