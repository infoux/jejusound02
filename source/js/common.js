
$(function(){
  AOS.init();
  submenu();


  const blankElems = $('.blank');
  const graphicElems = $('.graphic-item');
  let currentItem;

  const blankElems2 = $('.blank2');
  const graphicElems2 = $('.graphic-item2');
  let currentItem2;

  const blankElems3 = $('.blank3');
  const graphicElems3 = $('.graphic-item3');
  let currentItem3;

  const blankElems4 = $('.blank4');
  const graphicElems4 = $('.graphic-item4');
  let currentItem4;


  for (let i = 0; i < blankElems.length; i++) {
    
    blankElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }
  for (let i = 0; i < blankElems2.length; i++) {
    
    blankElems2[i].dataset.index = i;
    graphicElems2[i].dataset.index = i;
  }
  
  $(window).on("scroll",() => {
    const scr = $(window).scrollTop(); // 스크롤 값 얻기
    const scrollBottom = $(window).scrollTop() + $(window).height(); // 스크롤 바텀 값
    



    // 화면 전환 스티키1
    // page03
    let blank;
    let boundingRect;
  
    for (let i = 0; i < blankElems.length; i++) {
        blank = blankElems[i];
      boundingRect = blank.getBoundingClientRect();
      if (!blank) continue;

      if (boundingRect.top > window.innerHeight * 0.2 && boundingRect.top < window.innerHeight * 0.9) {
        if (currentItem) {
          currentItem.classList.remove('visible');
        }

        currentItem = graphicElems[blank.dataset.index];
        currentItem.classList.add('visible');
      }
    }

    // 화면 전환 스티키2
    // page05
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

    // 화면 전환 스티키3
    // page08
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

    // 화면 전환 스티키4
    // page09
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

    // page03
    const ofset01 = $('.page04').offset().top;
    if(scrollBottom>ofset01){
      $('.scroll-graphic').addClass('on')
    } else {
      $('.scroll-graphic').removeClass('on')
    }


    //page05
    const ofset02 = $('#page05').offset().top;
    if(scrollBottom>ofset02){
      $('.scroll-graphic2').addClass('on')
    } else {
      $('.scroll-graphic2').removeClass('on')
    }

    //page 06
    const ofset03 = $('.page06').offset().top;
    if(scrollBottom>ofset03){
      $('.scroll-graphic2').addClass('active')
    } else {
      $('.scroll-graphic2').removeClass('active')
    }



    

  })

});
    


function submenu(){
  // $('.nav-content li h3').on('mouseover',function(){
  //   $('.sub-content').addClass('on')
  // })
  // $('#header').on('mouseleave',function(){
  //   $('.sub-content').removeClass('on')
  // })

  $('.nav-content li h3').on('click',function(){
    $('.sub-content').toggle()
  })
}
