const bankText = '金融機関名：第四北越銀行\n支店名：大島支店（085）\n口座種別：普通\n口座番号：6324201\n口座名義：サトヤマミラクルショウガッコウ';
const status = document.querySelector('#copy-status');
async function copyDetails(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = `${label}をコピーしました。`;
  } catch {
    status.textContent = 'コピーできませんでした。表示されている振込先を選択してコピーしてください。';
  }
}
if (navigator.clipboard && window.isSecureContext) {
  const button = document.querySelector('#copy-bank');
  button.hidden = false;
  button.addEventListener('click', () => copyDetails(bankText, '振込先'));
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => copyDetails(button.dataset.copy, button.dataset.copyLabel));
  });
}
