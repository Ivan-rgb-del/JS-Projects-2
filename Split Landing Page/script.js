const ps5Div = document.querySelector('.ps5');
const xboxDiv = document.querySelector('.xbox');

(function widthPS5() {
  ps5Div.addEventListener('mouseover', () => {
    ps5Div.classList.add('active');
  });

  ps5Div.addEventListener('mouseout', () => {
    ps5Div.classList.remove('active');
  });
})();

(function widthXbox() {
  xboxDiv.addEventListener('mouseover', () => {
    xboxDiv.classList.add('active');
  });

  xboxDiv.addEventListener('mouseout', () => {
    xboxDiv.classList.remove('active');
  });
})();