$(document).ready(function () {
    $widget = $('.recipeselectwidget');
    $widget.parent('div')
        .css('display', 'flex')
    ;
    $widget.select2({width: 'resolve'}).css('flex', '1 1 auto');
    $('<button class="btn btn-default"><i class="fas fa-random"></i></button>')
        .click(function(e){
            e.preventDefault();
            // the first item is 'nothing', so we subtract it here
            const nofItems = $widget.children('option').length - 1;
            if(nofItems > 0){
                // actual item indices start at 2
                const pick = Math.floor(Math.random() * nofItems) + 2;
                $widget.val(pick);
                $widget.trigger('change');
            }
        })
        .css('flex', '0 0 auto')
        .insertBefore($widget);
});