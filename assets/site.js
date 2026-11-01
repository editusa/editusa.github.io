import {compareCosts} from './compare.mjs';

const directory = document.querySelector('[data-source-search]');
if (directory) {
  directory.hidden = false;
  const input = directory.querySelector('input');
  const cards = [...document.querySelectorAll('[data-source-card]')];
  const status = document.querySelector('[data-source-status]');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase('en-US');
    let visible = 0;
    for (const card of cards) {
      card.hidden = !card.textContent.toLocaleLowerCase('en-US').includes(query);
      if (!card.hidden) visible++;
    }
    status.textContent = visible ? `${visible} resource${visible === 1 ? '' : 's'} shown` : 'No matching resources. Try a broader subject, such as weather or technology.';
  });
}

const form = document.querySelector('[data-cost-form]');
if (form) {
  const result = document.querySelector('[data-cost-result]');
  const money = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD'});
  form.querySelector('[data-calculate]').disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    try {
      const values = Object.fromEntries(new FormData(form));
      const totals = compareCosts(values);
      result.querySelector('[data-total-a]').textContent = money.format(totals.a / 100);
      result.querySelector('[data-total-b]').textContent = money.format(totals.b / 100);
      result.querySelector('[data-period]').textContent = `${totals.months} month${totals.months === 1 ? '' : 's'}`;
      result.querySelector('[data-difference]').textContent = totals.difference === 0 ? 'Both plans have the same entered cost.' : `Plan ${totals.difference > 0 ? 'A' : 'B'} costs ${money.format(Math.abs(totals.difference) / 100)} less over this period.`;
      result.hidden = false;
      result.focus();
    } catch (error) {
      form.querySelector('[data-cost-error]').textContent = error.message;
    }
  });
  form.addEventListener('input',()=>{result.hidden=true;form.querySelector('[data-cost-error]').textContent='';});
  const print = document.querySelector('[data-print]');
  print.hidden = false;
  print.addEventListener('click',()=>window.print());
}
