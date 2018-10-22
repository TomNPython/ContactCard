let title = document.getElementsByClassName("collapsible"); // sets up selecting collapsible title sections
let i;

for (i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function() // changes things when titles are clicked on
                            {
    this.classList.toggle("active"); //changes color of title
    let content = this.nextElementSibling; //selects next content
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else { // hides or reveals content section
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}