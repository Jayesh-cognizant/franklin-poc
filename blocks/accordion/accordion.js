export default function decorate(block) {
  const buttons = document.createElement('div');
  buttons.className = 'accordion-buttons';
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.textContent = `${col.textContent} + updated!`;
    });
  });
}
