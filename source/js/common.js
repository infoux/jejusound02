
$(function(){
  AOS.init();
  // submenu();


  const blankElems2 = $('.news02 .blank2');
  const graphicElems2 = $('.news02 .graphic-item2');
  let currentItem2;

  const blankElems3 = $('.news02 .blank3');
  const graphicElems3 = $('.news02 .graphic-item3');
  let currentItem3;

  const blankElems4 = $('.news02 .blank4');
  const graphicElems4 = $('.news02 .graphic-item4');
  let currentItem4;

  const blankElems5 = $('.news02 .blank5');
  const graphicElems5 = $('.news02 .graphic-item5');
  let currentItem5;


  for (let i = 0; i < blankElems2.length; i++) {
    
    blankElems2[i].dataset.index = i;
    graphicElems2[i].dataset.index = i;
  }
  for (let i = 0; i < blankElems3.length; i++) {
    
    blankElems3[i].dataset.index = i;
    graphicElems3[i].dataset.index = i;
  }
  
  $(window).on("scroll",() => {
    const scr = $(window).scrollTop(); // 스크롤 값 얻기
    const scrollBottom = $(window).scrollTop() + $(window).height(); // 스크롤 바텀 값
    



    // 화면 전환 스티키2
    // page03
    let blank2;
    let boundingRect2;
  
    for (let i = 0; i < blankElems2.length; i++) {
        blank2 = blankElems2[i];
      boundingRect2 = blank2.getBoundingClientRect();
      if (!blank2) continue;

      if (boundingRect2.top > window.innerHeight * 0.2 && boundingRect2.top < window.innerHeight * 0.9) {
        if (currentItem2) {
          currentItem2.classList.remove('visible');
        }

        currentItem2 = graphicElems2[blank2.dataset.index];
        currentItem2.classList.add('visible');
      }
    }

    // 화면 전환 스티키2
    // page05
    let blank3;
    let boundingRect3;
  
    for (let i = 0; i < blankElems3.length; i++) {
        blank3 = blankElems3[i];
      boundingRect3 = blank3.getBoundingClientRect();
      if (!blank3) continue;

      if (boundingRect3.top > window.innerHeight * 0.2 && boundingRect3.top < window.innerHeight * 0.9) {
        if (currentItem3) {
          currentItem3.classList.remove('visible');
        }

        currentItem3 = graphicElems3[blank3.dataset.index];
        currentItem3.classList.add('visible');
      }
    }

    // 화면 전환 스티키3
    // page08
    let blank4;
    let boundingRect4;
  
    for (let i = 0; i < blankElems4.length; i++) {
        blank4 = blankElems4[i];
      boundingRect4 = blank4.getBoundingClientRect();
      if (!blank4) continue;

      if (boundingRect4.top > window.innerHeight * 0.2 && boundingRect4.top < window.innerHeight * 0.9) {
        if (currentItem4) {
          currentItem4.classList.remove('visible');
        }

        currentItem4 = graphicElems4[blank4.dataset.index];
        currentItem4.classList.add('visible');
      }
    }

    // 화면 전환 스티키4
    // page09
    let blank5;
    let boundingRect5;
  
    for (let i = 0; i < blankElems5.length; i++) {
        blank5 = blankElems5[i];
      boundingRect5 = blank5.getBoundingClientRect();
      if (!blank5) continue;

      if (boundingRect5.top > window.innerHeight * 0.2 && boundingRect5.top < window.innerHeight * 0.9) {
        if (currentItem5) {
          currentItem5.classList.remove('visible');
        }

        currentItem5 = graphicElems5[blank5.dataset.index];
        currentItem5.classList.add('visible');
      }
    }

    // page03
    const page04 = $('.news02 .page04')
    let ofset01
    if(page04.length){
      ofset01 = page04.offset().top;
    }
    if(scrollBottom>ofset01){
      $('.scroll-graphic2').addClass('on')
    } else {
      $('.scroll-graphic2').removeClass('on')
    }


    //page05
    const page05 = $('.news02 #page05')
    let ofset02
    if(page05.length){
      ofset02 = page05.offset().top;
    }
    if(scrollBottom>ofset02){
      $('.scroll-graphic3').addClass('on')
    } else {
      $('.scroll-graphic3').removeClass('on')
    }

    //page 06
    const page06 =  $('.news02 .page06')
    let ofset03
    if(page06.length){
      ofset03 = page06.offset().top;
    }
    if(scrollBottom>ofset03){
      $('.scroll-graphic3').addClass('active')
    } else {
      $('.scroll-graphic3').removeClass('active')
    }



    

  })

});
    


// function submenu(){

//   $('.nav-content li h3').on('click',function(){
//     $('.sub-content').toggle()
//   })
// }
