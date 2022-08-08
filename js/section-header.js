const SectionHeaderIconButton = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button');

function showfullSection() {
  const section = this.parentNode.parentNode;
  section.classList.add('is-open');
}

SectionHeaderIconButton.addEventListener('click', showfullSection);