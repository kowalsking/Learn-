function openTab(evt, page){
  var i, pages, links;
  //hide all pages
  pages = document.getElementsByClassName("content");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  links = document.getElementsByClassName("link");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " active";
}