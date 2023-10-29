function toggleNav() {
    var ele = document.getElementById("disabled");
    if (ele.classList.contains('disabled')) {
     ele.classList.remove('disabled');
     document.body.style.overflowY = 'hidden';
    } else {
      ele.classList.add('disabled');
      document.body.style.overflowY = 'scroll';

    }
  }
