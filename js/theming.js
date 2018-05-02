let cookieStr = document.cookie;
let isDark = cookieStr.indexOf("theme=dark") !== -1;

if (isDark) {
  changeTheme();
}

function changeTheme() {
  let nav_head = document.getElementById("nav_head");

  let body = document.getElementById("body");

  let actionButtonIcon = document.getElementById("actionButtonIcon");

  let actionButton = document.getElementById("actionButton");

  //Change from white to black
  if (nav_head.classList.contains("white")) {
    document.cookie = "theme=dark";

    actionButtonIcon.innerText = "brightness_high";
    actionButton.classList.remove("orange");
    actionButton.classList.add("blue");
    actionButton.classList.add("lighten-2");

    nav_head.classList.remove("white");
    nav_head.classList.add("blue-grey");
    nav_head.classList.add("darken-4");

    let navlinks = document.getElementsByClassName("colorable_nav_link");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].classList.remove("deep-orange-text");
      navlinks[i].classList.add("blue-text");
      navlinks[i].classList.add("text-lighten-2");
    }

    let links = document.getElementsByClassName("colorable_link");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("orange-text");
      links[i].classList.add("blue-text");
      links[i].classList.add("text-lighten-2");
    }

    let container = document.getElementsByClassName("colorable_container");
    for (let i = 0; i < container.length; i++) {
      container[i].classList.remove("white");
      container[i].classList.add("blue-grey");
      container[i].classList.add("darken-3");
    }

    body.classList.remove("white");
    body.classList.add("blue-grey");
    body.classList.add("darken-3");

    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("white");
      cards[i].classList.add("blue-grey");
      cards[i].classList.add("darken-2");
    }

    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("white");
      tabs[i].classList.add("blue-grey");
      tabs[i].classList.add("darken-2");
    }

    let dropdown = document.getElementsByClassName("colorable_dropdown");
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].classList.remove("white");
      dropdown[i].classList.add("blue-grey");
      dropdown[i].classList.add("darken-2");
    }

    let collapsible = document.getElementsByClassName("colorable_collection");
    for (let i = 0; i < collapsible.length; i++) {
      collapsible[i].classList.remove("white");
      collapsible[i].classList.add("blue-grey");
      collapsible[i].classList.add("darken-3");
    }

    let collapsible_headers = document.getElementsByClassName("colorable_collection_header");
    for (let i = 0; i < collapsible_headers.length; i++) {
      collapsible_headers[i].classList.remove("white");
      collapsible_headers[i].classList.add("blue-grey");
      collapsible_headers[i].classList.add("darken-3");
      collapsible_headers[i].classList.add("border-black");
    }

    let main_text = document.getElementsByClassName("colorable_maintext");
    for (let i = 0; i < main_text.length; i++) {
      main_text[i].classList.remove("grey-text");
      main_text[i].classList.remove("text-darken-3");
      main_text[i].classList.add("white-text");
    }

    let text = document.getElementsByClassName("colorable_text");
    for (let i = 0; i < text.length; i++) {
      text[i].classList.remove("black-text");
      text[i].classList.add("white-text");
    }

  } else {
    document.cookie = "theme=light";

    actionButtonIcon.innerText = "brightness_2";
    actionButton.classList.add("orange");
    actionButton.classList.remove("blue");
    actionButton.classList.remove("lighten-2");

    nav_head.classList.remove("darken-4");
    nav_head.classList.remove("blue-grey");
    nav_head.classList.add("white");

    let navlinks = document.getElementsByClassName("colorable_nav_link");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].classList.add("deep-orange-text");
      navlinks[i].classList.remove("blue-text");
      navlinks[i].classList.remove("text-lighten-2");
    }

    let links = document.getElementsByClassName("colorable_link");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("orange-text");
      links[i].classList.remove("blue-text");
      links[i].classList.remove("text-lighten-2");
    }

    let container = document.getElementsByClassName("colorable_container");
    for (let i = 0; i < container.length; i++) {
      container[i].classList.add("white");
      container[i].classList.remove("blue-grey");
      container[i].classList.remove("darken-3");
    }

    body.classList.add("white");
    body.classList.remove("blue-grey");
    body.classList.remove("darken-3");

    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("white");
      cards[i].classList.remove("blue-grey");
      cards[i].classList.remove("darken-2");
    }

    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.add("white");
      tabs[i].classList.remove("blue-grey");
      tabs[i].classList.remove("darken-2");
    }

    let dropdown = document.getElementsByClassName("colorable_dropdown");
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].classList.add("white");
      dropdown[i].classList.remove("blue-grey");
      dropdown[i].classList.remove("darken-2");
    }

    let collapsible = document.getElementsByClassName("colorable_collection");
    for (let i = 0; i < collapsible.length; i++) {
      collapsible[i].classList.add("white");
      collapsible[i].classList.remove("blue-grey");
      collapsible[i].classList.remove("darken-3");
    }

    let collapsible_headers = document.getElementsByClassName("colorable_collection_header");
    for (let i = 0; i < collapsible_headers.length; i++) {
      collapsible_headers[i].classList.add("white");
      collapsible_headers[i].classList.remove("blue-grey");
      collapsible_headers[i].classList.remove("darken-3");
      collapsible_headers[i].classList.remove("border-black");
    }

    let main_text = document.getElementsByClassName("colorable_maintext");
    for (let i = 0; i < main_text.length; i++) {
      main_text[i].classList.add("grey-text");
      main_text[i].classList.add("text-darken-3");
      main_text[i].classList.remove("white-text");
    }

    let text = document.getElementsByClassName("colorable_text");
    for (let i = 0; i < text.length; i++) {
      text[i].classList.add("black-text");
      text[i].classList.remove("white-text");
    }

  }
}