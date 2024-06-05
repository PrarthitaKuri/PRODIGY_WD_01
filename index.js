document.addEventListener('DOMContentLoaded', () => {
  const h_state = document.querySelector('.topnav');
  h_state.addEventListener('mouseover', () => {
      h_state.style.backgroundColor = 'skyblue';
  });
  h_state.addEventListener('mouseout', () => {
      h_state.style.backgroundColor = '';
  });
});