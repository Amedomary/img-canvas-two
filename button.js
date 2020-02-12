
setTimeout(() => {
  const svg = document.getElementById('svg');
  const rectArr = document.getElementsByTagName('rect');
  const x = 50;

  for (let index = 0; index < rectArr.length; index++) {
    const element = rectArr[index];
    element.setAttribute('style', `transform: translate(${Math.random() * x - x / 2}px, ${Math.random() * x - x / 2}px)`)
  }
}, 100);
