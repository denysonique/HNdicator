(function() {
  $(function() {
    var $counter, $input;
    $input = $("input[name='t']");
    $counter = $("<a>");
    $input.parent().append($counter);
    return $("input[name='t']").bind("keyup keydown change paste click", function() {
      $counter.html(this.value.length);
      if (this.value.length > 80) {
        return $counter.css({
          color: 'red'
        });
      } else {
        return $counter.css({
          color: ''
        });
      }
    });
  });
}).call(this);
