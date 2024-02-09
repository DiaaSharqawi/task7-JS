const tasbeeh = [
'سبحان الله',
'الحمد لله',
' لا إله إلا الله',
' الله أكبر',
' رب اغفر لي',
' أستغفر الله',
' لا حول ولا قوة إلا بالله',
' اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي',
' اللهم صل وسلم وبارك على سيدنا محمد',
' سبحان الله وبحمده سبحان الله العظيم',
' اللهم اغفر لي ذنبي كله دقه وجله، علانيته وسره، وأوله وآخره',
' الله أكبر كبيرا والحمدلله كثيرا وسبحان الله وبحمده بكرةً وأصيلا',
' سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته',
' أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه',

' سبحان الله والحمد لله ولا إله إلا الله والله أكبر',
' لا اله الا انت سبحانك إني كنت من الظالمين',];




intilize();
function intilize(){
    let result='';
for (let i=0;i<tasbeeh.length;i++){
    result +=  `
    <div class="tasbeeh text-center">
          <h2 class="tasbeeh-${i+1}">${tasbeeh[i]} </h2>
          <div class="circle hvr-back-pulse">
            <span class="counter-${i+1}">0</span>
            
          </div>
          <div class="reset"> 
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">

          <defs>
          </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          </g>
          </svg>
          </div>
        </div>
    ` 
}


document.querySelector('.tasbeehat').innerHTML = result;

const circles = document.querySelectorAll('.circle');
for (let i=0;i<circles.length;i++)
circles[i].onclick=increaseCounter;

const resets = document.querySelectorAll('.reset');
for(let i=0;i<resets.length;i++)
resets[i].onclick = setCountToZero;
}



function setCountToZero(e){
    e.target.closest('.tasbeeh').children[1].children[0].innerText=0;
}

 function increaseCounter(e){
   let counter =  e.target.children[0].innerText;
   e.target.children[0].innerText= (++counter)%100;
}
