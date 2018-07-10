function submitForm() {
    event.preventDefault();
    var id = $(event.currentTarget).find('input[name="id"]').val();
    var data = $(event.currentTarget).serialize();
    if (id !== '')
        $.ajax({
            url: '/update',
            type: 'post',
            data: data,
            success: function () {
                location.reload();
            }
        });
    else
        $.ajax({
            url: '/',
            type: 'post',
            data: data,
            success: function () {
                location.reload();
            }
        });
}

function deleteEvento(id) {
    $.ajax({
        url: '/delete',
        type: 'post',
        data: { id: id },
        success: function () {
            location.reload();
        }
    });
}