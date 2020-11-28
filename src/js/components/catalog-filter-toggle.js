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

