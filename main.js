const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

const likeBtn = document.querySelector('.info .actions button i.like');
const dislikeBtn = document.querySelector('.info .actions button i.dislike');
const one = document.querySelector('.info .actions button span.plus');

/*자바스크립트 기능 추가*/
likeBtn.addEventListener('click', () => {
  likeBtn.classList.add('clicked');
  dislikeBtn.classList.remove('clicked');
  one.innerHTML=0;
})

dislikeBtn.addEventListener('click', () => {
  dislikeBtn.classList.add('clicked');
  likeBtn.classList.remove('clicked');
  one.innerHTML=1;
})
/** */