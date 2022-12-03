const scrollButton = document.querySelector('.scroll-button');
const storyButtons = document.querySelectorAll('.team-button-change');

window.addEventListener('scroll',showScrollButton);
scrollButton.addEventListener('click',goScrollToTop);
storyButtons.forEach(el=>{
    el.addEventListener('click',showTeamStory);
})

function showScrollButton(){

   if(window.scrollY >=100){
    scrollButton.classList.add('scrolled-window')
   }

   else{
    scrollButton.classList.remove('scrolled-window')
   }
   
}

function goScrollToTop(){
    window.scroll(null,0);
}

function showTeamStory(event){
    event.currentTarget.nextElementSibling.classList.toggle('show-team-story')
}