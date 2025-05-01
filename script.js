document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const likesText = btn.parentElement.nextElementSibling;
      let count = parseInt(likesText.querySelector('strong').textContent);
      if (btn.classList.contains('liked')) {
        count--;
        btn.classList.remove('liked');
      } else {
        count++;
        btn.classList.add('liked');
      }
      likesText.querySelector('strong').textContent = count;
    });
  });
  