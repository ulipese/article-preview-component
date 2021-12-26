const shareButton = document.querySelector('.share-button');
const imgShareButton = document.querySelector('.share-button img');
const articleProfile = document.querySelector('.main-card__article');
const articleShare = document.querySelector('.share-infos');

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('active');
  if (shareButton.classList.contains('active')) {
    shareButton.style.backgroundColor = '#6E8098';
    imgShareButton.src = './assets/images/icon-share-active.svg';
    articleProfile.classList.add('hidden');
    articleShare.style.display = 'flex';
  }
  else {
    imgShareButton.src = './assets/images/icon-share.svg';
    shareButton.style.backgroundColor = 'var(--light-grayish-blue)';
    articleProfile.classList.remove('hidden');
    articleShare.style.display = 'none';
  }
});
