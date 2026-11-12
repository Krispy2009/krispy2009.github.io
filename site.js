// kristi.cy: theme toggle, braille signature, and a hello for curious devs.
// The theme itself is set by a small inline script in <head>, before first paint.

(function () {
    // Light / chalkboard toggle
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var html = document.documentElement;
            var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) {}
        });
    }

    // Braille signature. Dots are numbered 1-3 down the left column, 4-6 down the right.
    var letters = { k: [1, 3], r: [1, 2, 3, 5], i: [2, 4], s: [2, 3, 4], t: [2, 3, 4, 5] };
    var out = document.getElementById('braille');
    if (out) {
        'kristi'.split('').forEach(function (ch) {
            var cell = document.createElement('span');
            cell.className = 'cell';
            for (var d = 1; d <= 6; d++) {
                var dot = document.createElement('span');
                if (letters[ch].indexOf(d) !== -1) dot.className = 'on';
                cell.appendChild(dot);
            }
            out.appendChild(cell);
        });
    }

    // Hello, fellow dev
    console.log(
        '%c👋 Hi, fellow dev! You found the console.\n%cHappy engineers build the best things. Want to build some together? → https://www.kristi.cy/work-with-me.html',
        'color:#7444dd;font-size:16px;font-weight:bold',
        'color:#545a72;font-size:13px'
    );
})();
