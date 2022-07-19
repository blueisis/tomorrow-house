const commonOptions = {
  navAsThumbnails: true, // 썸네일을 버튼으로 사용하고 있는지
  arrowKeys: true, // 방향키로 조절
  mouseDrag: true,
  preventScrollOnTouch: true, // 드래그시 콘솔 오류 방지
  // slideBy: 'page',
  // autoplay: true
}

const productCarousel = tns({
  ...commonOptions,
  container: '.product-carousel .slider-list',
  controls: false, // prev/next 기본 버튼 안보이게
  navContainer: '.product-carousel .thumbnail-list', // 썸네일 버튼 연결
  autoplay: true, // 자동재생
  autoplayHoverPause: true, // 호버시 멈춤
  autoplayButtonOutput: false, // 자동 재생 설정시 생기는 버튼
});

const userGalleryMobile = tns({
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4, // 사이 간격
  edgePadding: 16, // 다음 아이템 보이는 넓이
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  loop: false,
})

const userGalleryDesktop = tns({
  ...commonOptions,
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6, // 사이 간격
  edgePadding: 75, // 다음 아이템 보이는 넓이
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls', // prev, next 버튼 박스
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  loop: false,
})