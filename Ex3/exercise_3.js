
function CheckLimit(limit) {
  this.limit  = limit;
  this.count = 0;
}

CheckLimit.prototype.check = function(id) {
  
  var none = document.getElementById('none');
  none.checked = false;
  var checkbox = document.getElementById(id);

  if (checkbox.checked) {
    if (this.count < this.limit) {
      this.count++;
    } else {
      checkbox.checked = false;

      var checkedBoxes = document.querySelectorAll('input.days:checked');

      composer.composeMessage(checkedBoxes);
    }
  } else {
    this.count--;
  };
};

CheckLimit.prototype.uncheck = function() {
  
  var none = document.getElementById('none');

  var checkedBoxes = document.querySelectorAll('input.days:checked');
  var len = checkedBoxes.length;
  for (i = 0; i < len; i++) {
    checkedBoxes[i].checked = false;
  }

  this.count = 0;
};

var checkLimit = new CheckLimit(3);