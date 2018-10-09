//ciblage du DOM
const sectionSmallImg = document.getElementById('content-img-small').children;
const sectionBigImg = document.getElementById('content-img-big').children;
const sectionXsmallImg = document.getElementById('content-img-xsmall').children;
const sectionMyBigImg = document.getElementById('content-myBigImg');

/**
*@desc lance les évenements au survol et sorti des images
*/
function addEventsV1(sectionSmallImg){
  for (let i = 0; i < sectionSmallImg.length; i++) {
    sectionSmallImg[i].addEventListener('mouseover',e => {
      displayImgBig(e.target.src,sectionBigImg);
    });
    sectionSmallImg[i].addEventListener('mouseout',e => {
        reset(sectionBigImg);
    });
  }
}
/**
*@desc mettre les écouteurs d'évenements sur les images miniatures
*/
function addEventsV2(sectionXsmallImg){
  for (let i = 0; i < sectionXsmallImg.length; i++) {
    sectionXsmallImg[i].addEventListener('mouseover',e => {
      displayMybigImg(e.target.src);
    });
  }
}
/**
*@desc affiche et cache les grandes images
*@param imgSrc source de l'image capturé par l'évenement mouseover
*@param sectionBigImg tableau des sources des grandes images
*/
function displayImgBig(imgSrc,sectionMyBigImg){
  for (let i = 0; i < sectionBigImg.length; i++) {
    if(imgSrc == sectionBigImg[i].src){
      sectionBigImg[i].style.display = 'inline';
    }
    else{
      sectionBigImg[i].style.display = 'none';
    }
  }
}

/**
*@desc affiche une miniature en grand format
*@param imgSrc source de l'image capturé par l'évenement mouseover
*/
function displayMybigImg(imgSrc){
  let bigImg = imgSrc.substr(imgSrc.lastIndexOf('/'));
  let urlBase = imgSrc.substr(0,imgSrc.indexOf('/small'));
  sectionMyBigImg.innerHTML = '<img id="big" src="'+urlBase + bigImg+'" title="Pour supprimer l\'image , cliquez dessus"/>';
  document.getElementById('big').addEventListener('click', e => sectionMyBigImg.innerHTML='');
}

/**
*@desc cache toutes les grandes images
*@param sectionBigImg tableau des sources des grandes images
*/
function reset(sectionBigImg){
  for (let i = 0; i < sectionBigImg.length; i++) {
    sectionBigImg[i].style.display='none';
  }
}

/**
*@desc initialisation
*/
function init(){
  addEventsV1(sectionSmallImg);
  addEventsV2(sectionXsmallImg);
}

init();
