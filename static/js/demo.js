/**
 * Created by Zura on 4/5/2016.
 */
$(function () {
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        size: 'mini',
        // delay: false,
        position: 'right top'
    });
 
    $('#todo-lists-demo-datepicker').lobiList({
        lists: [
            {
                title: 'TODO',
                defaultStyle: 'lobilist-info',
                items: [
                    {
                        title: 'Floor cool cinders',
                        description: 'Thunder fulfilled travellers folly, wading, lake.',
                        dueDate: '2015-01-31'
                    }
                ]
            }
        ],
        afterListAdd: function(lobilist, list){
            var $dueDateInput = list.$el.find('form [name=dueDate]');
            $dueDateInput.datepicker();
        }
    });
 
    // Custom controls
    $('#todo-lists-demo-controls').lobiList({
        lists: [
            {
                title: 'Pending',
                defaultStyle: 'lobilist-success',
                controls: ['edit', 'styleChange'],
                items: [
                    
                ]
            },
            {
                title: 'On Hold',
                defaultStyle: 'lobilist-danger',
                controls: ['edit', 'add', 'remove'],
                useLobicheck: false,
                items: [
                    
                ]
            },
            {
                title: 'In Progress',
                controls: false,
                items: [
                     
                ]
            } 
        ]
    });
});