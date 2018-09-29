function refreshRem() {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}
refreshRem();
window.addEventListener('resize', refreshRem);
