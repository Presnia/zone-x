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

vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
      console.log(el.querySelector('input'))
      let checked = el.querySelector('input').checked;

      if (checked) {
        el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
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