setTimeout(() => {
    let currentBGColor = 13;
    const htmlNode = document.getElementsByTagName('html');
    const htmlCenterRect = document.getElementById('center-mask-rect');

    let lastKnownScrollPosition = 0;
    let ticking = false;
    const h = innerHeight;
    const w = innerWidth;

    function setBGColor(color) {
        htmlNode[0].setAttribute('style', `background-color: hsl(0, 0%, ${color}%)`);
    }
    setBGColor(currentBGColor);

    const nodeW = htmlCenterRect.clientWidth;
    function setWCenterNode(w) {
        htmlCenterRect.setAttribute('style', `width: ${w}px`);
    }
    setWCenterNode(nodeW);

    const step = h / 13;
    const xW = (w - nodeW) / h;
    function doSomething(scrollPos) {
        const deltaH = h - scrollPos;
        const piece = Math.floor(deltaH / step);
        const W = (scrollPos * xW) + nodeW;

        setBGColor(piece);
        setWCenterNode(W);

    }

    window.addEventListener('scroll', function (e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                doSomething(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });




}, 100);