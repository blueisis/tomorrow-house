const SectionHeaderIconButton = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button');

console.log(SectionHeaderIconButton);

function showfullSection() {
  const section = this.parentNode.parentNode;
  section.classList.add('is-open');
}

SectionHeaderIconButton.addEventListener('click', showfullSection);