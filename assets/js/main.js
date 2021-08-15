const burger = () => {
    const links = document.getElementById("nav-links");
    if(links.classList.contains("hidde")){
        menu.children[0].innerHTML = "x";
        links.classList.remove("hidde");
    }else{
        menu.children[0].innerHTML = "=";
        links.classList.add("hidde");
    }
}

const menu = document.getElementById("burger");

menu.addEventListener("click", (e) => {
    burger();
})

