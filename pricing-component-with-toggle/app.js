const checkbox = document.getElementById('checkbox');
const pricingSection = document.querySelector('.pricing-components');

checkbox.addEventListener('change', () => {
    pricingSection.classList.toggle('show-annually');
});
