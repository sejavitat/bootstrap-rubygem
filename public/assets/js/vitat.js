$(document).ready(function() {

    // STARTING TOOLTIP 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // STARTING POPOVER
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    }) 

    // DATATABLE
    $('#table').DataTable( {
        language: {
            'url': '//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-PT.json',
            'paginate': {
                'previous': '<span class="prev-icon"><</span>',
                'next': '<span class="next-icon">></span>'
                }   
        }
    } );
    $('div.dataTables_length select').addClass( "form-control" );


    //SUBMENU
    $(document).ready(function(){
        // Se o submenu estiver ativo, mostra os itens e altera o ícone para "chevron-up"
        if ($('.submenu').hasClass('active')) {
            $('.submenu-items').show();
            $('.submenu-toggle i.bi-chevron-down').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        }

        // Alterna a exibição do submenu e o ícone ao clicar
        $('.submenu-toggle').on('click', function() {
            $(this).next('.submenu-items').slideToggle();
            $(this).find('i.bi').toggleClass('bi-chevron-down bi-chevron-up');
        });
    });

});