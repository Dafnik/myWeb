var dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown, {});

var tooltipped = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltipped, {});

var modal = document.querySelectorAll('.modal');
M.Modal.init(modal, {});

var tabs = document.querySelectorAll('ul.tabs');
M.Tabs.init(tabs, {
  swipeable: true
});

var collabsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collabsible, {});

var scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {
  scrollOffset: 150
});

var parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});


window.onload = function(){
  var carousel = document.getElementsByClassName("tabs-content");

  var tabby = document.getElementById("tabby");

  var style = window.getComputedStyle(tabby);

  var height = style.height.slice(0, -2);

  var heightNumber = Number(height);

  heightNumber = heightNumber + 200;

  carousel[0].style.height = heightNumber + "px";
};


function copyPGPToClipboard() {
  window.prompt("Copy to clipboard: Ctrl+C, Enter",
    "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
    "Version: Keybase OpenPGP v2.0.64\n" +
    "Comment: https://keybase.io/crypto\n" +
    "\n" +
    "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\n" +
    "=0x44\n" +
    "-----END PGP PUBLIC KEY BLOCK-----");
}