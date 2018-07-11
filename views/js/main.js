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
        data: {
            id: id
        },
        success: function () {
            location.reload();
        }
    });
}

function updateEvento(ano, mes, dia, evento, id) {
    $('input[name="id"]').val(id);
    $('input[name="ano"]').val(ano);
    $('input[name="mes"]').val(mes);
    $('input[name="dia"]').val(dia);
    $('input[name="evento"]').val(evento);
    $('#modal1').modal('open');
}

function cancel() {
    $('form').trigger("reset");
}

$(document).ready(function () {
    $('.modal').modal();
    $('.modal-trigger').on('click', function () {
        $('input[name="id"]').val('');
        cancel();
    });
});