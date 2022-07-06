const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false, // prev/next 기본 버튼 안보이게
  navContainer: '.product-carousel .thumbnail-list', // 썸네일 버튼 연결
  navAsThumbnails: true, // 썸네일을 버튼으로 사용하고 있는지
  arrowKeys: true, // 방향키로 조절
  autoplay: true, // 자동재생
  autoplayHoverPause: true, // 호버시 멈춤
  autoplayButtonOutput: false, // 자동 재생 설정시 생기는 버튼
  mouseDrag: true,
  preventScrollOnTouch: true, // 드래그시 오류 방지
  // slideBy: 'page',
  // autoplay: true
});

const userGallery = tns({
  container: '.user-gallery .slider-list',
  gutter: 4, // 사이 간격
  edgePadding: 16, // 다음 아이템 보이는 넓이
  controls: false,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    }
  }
})