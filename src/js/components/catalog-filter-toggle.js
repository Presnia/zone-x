import vars from '../_vars';

vars.$catalogFiltersTop.forEach(el => {
  el.addEventListener('click', (e) => {
    e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
  });
});

vars.$hideFilters.addEventListener('click', (e) => {
    vars.$catalogFiltersTop.forEach(el => {
      el.closest('.catalog-filter').classList.remove('catalog-filter--open');
  });
});

const createChoiceItem = (text) => {
  return (
    `
    <button class="btn-reset catalog-choice__item">
        ${text}
        <img class="catalog-choice__item--img" src="../img/close.svg" alt="">
      </button>
    `
  )
}

vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
      console.log(el.querySelector('input'))
      let checked = el.querySelector('input').checked;

      if (checked) {
        el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox__text').textContent;

        vars.$catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));

      } else {
        el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
      }

      let activeCheckboxes = document.querySelectorAll('.custom-checkbox--active');
      console.log(activeCheckboxes);

      if (activeCheckboxes.length > 0) {
        vars.$catalogChoice.style.display = 'block';
      } else {
        vars.$catalogChoice.style.display = 'none';
      }
    });
  });

  vars.$catalogChoice.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-choice__item')) {
      e.target.remove();

      let text = e.target.textContent.trimLeft().trimRight();

      document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
      document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
    }

    if (e.target.classList.contains('catalog-choice__clear')) {
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains('catalog-choice__clear')) {
          el.remove();
        }
        
        vars.$catalogFilterItems.forEach(el => {
          el.querySelector('input').checked = false;
          el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        });
      });

      e.currentTarget.style.display = 'none';
    }

    if (e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = 'none';
    }
  });