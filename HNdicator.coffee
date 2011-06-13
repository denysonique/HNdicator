$ ->
    $input = $ "input[name='t']"
    $counter = $ "<a>"
    $input.parent().append $counter

    $("input[name='t']").bind "keyup keydown change paste click", ->
        $counter.html(@value.length)
        if @value.length > 80
            $counter.css color: 'red'
        else
            $counter.css color: ''
