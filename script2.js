async function main() {
    let full = await fetch("/songs/")
    let div = document.createElement("div");
    let a = await full.text();
    div.innerHTML = a;
    let as = div.getElementsByTagName("a");
    let songs=[];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    console.log(songs)
}
main()