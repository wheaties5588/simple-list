let list = document.getElementById("list");

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked-item');
    }
  }, false);