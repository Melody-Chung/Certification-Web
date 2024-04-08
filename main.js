
//  文字顯示訊息
// document.querySelector("h1").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };
  
  //轉換網頁
// let coffeepage = document.querySelector(".box4");
// myImage.onclick = function () {
//     changepage();
// }
// function changepage(){
//     myImage.innerHTML.location.href = "subsite-coffee.html";
// }

  //coffee圖片變換
var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/coffee.jpg") {
      myImage.setAttribute("src", "images/coffee2.jpg");
    } 
    if (mySrc === "images/coffee2.jpg") {
      myImage.setAttribute("src", "images/coffee.jpg");
    }
}
    //網頁使用者改變
// var myButton = document.querySelector("button");
// var myHeading = document.querySelector("h1");
// if (!localStorage.getItem("name")) {
//     setUserName();
// } 
// else {
//     let storedName = localStorage.getItem("name");
//     myHeading.innerHTML = "Hello, " + storedName;
// }
// myButton.onclick = function () {
//     setUserName();
// };
// function setUserName() {
//     let myName = prompt("Please enter your name.");
//     if(!myName || myName === null) {
//         setUserName();
//     } 
//     else {
//     localStorage.setItem("name", myName);
//     myHeading.innerHTML = "Hello, " + myName;
//     }
//   }


var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu, theEvent ){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display === 'none' ){ // 顯示子選單
        // SubMenu.style.minWidth = theMainMenu.style.Width; // 讓子選單的最小寬度與主選單相同 (僅為了美觀)
        SubMenu.style.display = 'block';
        // hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
        
}

// 隱藏子選單
function hideMenu(){
    if( VisibleMenu != '' ){
        document.getElementById( VisibleMenu ).style.display = 'none';
    }
    VisibleMenu = '';
}