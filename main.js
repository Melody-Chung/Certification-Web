window.onload = function () {
    const element = document.getElementById('js-btn1');
    element.addEventListener('click', foo, false);
    const ele = document.getElementById('js-btn2');
    ele.addEventListener('click', hi, false);
};
function foo() {
    alert('Hello World');
    window.open("https://www.google.com.tw/search?q=sca+%E5%92%96%E5%95%A1&sca_esv=fa43b9b9aaa58bb0&sxsrf=ACQVn0_UFQnqPR2A-yb4l7qBHoCQwjSJ4g%3A1710810813716&ei=veb4ZfCgK_u2vr0P3tik4Ak&oq=sc%E5%92%96%E5%95%A1&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHNj5ZKW5ZWhKgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIIEAAYBxgeGA8yCBAAGAcYHhgPMggQABgHGB4YD0jdIVDrEliNGHABeAGQAQCYAXqgAc0BqgEDMS4xuAEByAEA-AEBmAIDoALaAcICBxAjGLADGCfCAgoQABhHGNYEGLADmAMAiAYBkAYKkgcDMi4xoAedBQ&sclient=gws-wiz-serp")
}
function hi() {
    alert('hi');
}