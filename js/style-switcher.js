// theme color
const themeColor = () => {
  const hueSlider = document.querySelector('.js-hue-slider');
  const html = document.querySelector('html');

  const setHue = (value) => {
    html.style.setProperty('--hue', value);
    document.querySelector('.js-hue').innerHTML = value;
  };

  hueSlider.addEventListener('input', function () {
    setHue(this.value);
    // set the user's preference in local storage
    localStorage.setItem('--hue', this.value);
  });

  const slider = (value) => {
    hueSlider.value = value;
  };

  // check for saved user preference, if any, on load of the website
  if (localStorage.getItem('--hue') !== null) {
    setHue(localStorage.getItem('--hue'));
    slider(localStorage.getItem('--hue'));
  } else {
    // default color
    const hue = getComputedStyle(html).getPropertyValue('--hue');
    setHue(hue);
    slider(hue.split(' ').join(''));
  }
};
themeColor();
