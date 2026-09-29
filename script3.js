(function () {
    var photos = [];
    for (var n = 6; n <= 11; n++) photos.push('car' + n + '.png');

    var viewport = document.getElementById('g-viewport');
    var btnPrev  = document.getElementById('g-prev');
    var btnNext  = document.getElementById('g-next');
    var counter  = document.getElementById('g-counter');
    var thumbsEl = document.getElementById('g-thumbs');

    var current = 0;
    var busy = false;
    var DURATION = 750;

    var thumbs = photos.map(function (src, i) {
        var t = document.createElement('img');
        t.src = src;
        t.alt = 'Miniatura ' + (i + 1);
        t.addEventListener('click', function () { goTo(i); });
        thumbsEl.appendChild(t);
        return t;
    });

    function updateUI() {
        // pierwsze zdjęcie: tylko strzałka w prawo, ostatnie: tylko w lewo
        btnPrev.classList.toggle('is-hidden', current === 0);
        btnNext.classList.toggle('is-hidden', current === photos.length - 1);
        counter.textContent = (current + 1) + ' / ' + photos.length;
        thumbs.forEach(function (t, i) {
            t.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        if (busy || index === current || index < 0 || index >= photos.length) return;
        busy = true;

        var dir = index > current ? 1 : -1;
        var oldImg = viewport.querySelector('img');

        var newImg = document.createElement('img');
        newImg.src = photos[index];
        newImg.alt = 'Zdjęcie ' + (index + 1);
        newImg.style.zIndex = 2;
        oldImg.style.zIndex = 1;
        viewport.appendChild(newImg);

        var fromClip, toClip;
        if (dir === 1) {
            fromClip = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
            toClip   = 'polygon(-30% 0, 100% 0, 100% 100%, 0% 100%)';
        } else {
            fromClip = 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)';
            toClip   = 'polygon(0% 0, 130% 0, 100% 100%, 0% 100%)';
        }

        var easing = 'cubic-bezier(0.77, 0, 0.18, 1)';

        var animNew = newImg.animate([
            { clipPath: fromClip, transform: 'scale(1.35)', filter: 'brightness(2.2) blur(6px)' },
            { clipPath: toClip,   transform: 'scale(1)',    filter: 'brightness(1) blur(0)' }
        ], { duration: DURATION, easing: easing, fill: 'forwards' });

        oldImg.animate([
            { transform: 'translateX(0) scale(1)', filter: 'brightness(1) blur(0)' },
            { transform: 'translateX(' + (-dir * 12) + '%) scale(0.92)', filter: 'brightness(0.35) blur(8px)' }
        ], { duration: DURATION, easing: easing, fill: 'forwards' });

        current = index;
        updateUI();

        animNew.onfinish = function () {
            newImg.getAnimations().forEach(function (a) { a.cancel(); });
            oldImg.remove();
            busy = false;
        };
    }

    btnPrev.addEventListener('click', function () { goTo(current - 1); });
    btnNext.addEventListener('click', function () { goTo(current + 1); });

    // sterowanie strzałkami na klawiaturze
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    updateUI();
})();