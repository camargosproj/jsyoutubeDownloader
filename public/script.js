var downloadBtn = document.querySelector(".downloadBtn");
var input = document.querySelector(".input");

//Youtube url RegExp
const urlPattern = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;


const downloadVideo = () => {
    preventInputDefault();
    downloadBtn.addEventListener("click", () => {
        if(isUrlValid(input.value)){
            getUrl(input.value);
        }
        else{
            alert("URL inválida! 😕");
        }
    })
}
async function  getUrl(url) {
    try {
        let data = await fetch("/download?URL=" + url)
        if(data.status == 200){
            console.log(data);
            window.location.href = data.url;
            alert("Download prontinho! 😁");
        }
    } catch (error) {
        alert("Algo deu errado, Tente mais tarde! 🤬");
    }

}

const isUrlValid = (urlValue) => {
    if(urlValue.match(urlPattern)){
        return true;
    }
    return false;
}

const preventInputDefault = () => {
    input.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            alert("Pressione Download para baixar! 😀");
            e.preventDefault();
        }
    });
    
}

console.log("Server is working");
downloadVideo();