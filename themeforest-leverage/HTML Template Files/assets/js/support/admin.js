/*----------------------------------------------
*
* [Admin Scripts]
*
* Theme    : Leverage
* Version  : 2.0
* Author   : Codings
* Support  : codings.dev
* 
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. ACF
2. OCDI
3. Load
4. Release Notes

----------------------------------------------*/

/*----------------------------------------------
1. ACF
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    function updateIcon(timeout) {
        setTimeout(function() {
            let item = $('.select2-results__option');
            item.each(function() {          
                let value = $(this).text();
                $(this).addClass('leverage-icon-item').html('<i class="icon-'+value+'" title="'+value+'"></i>'+value);
            })
        }, timeout)
    }

    $( document ).on( 'select2:opening', '.leverage-icon select', function() {
        updateIcon(100);
        updateIcon(800);
        updateIcon(1600);
    })

    $(document).on('keyup', '.select2-dropdown:not(.fa-select2-drop) .select2-search__field', function () {
        updateIcon(100);
        updateIcon(800);
        updateIcon(1600);
    })
})

jQuery(function ($) {

    'use strict';

    $('.leverage-tab-fix .acf-tab-wrap').hide();

    $(document).on('click', '.leverage-tab-fix .acf-true-false input', function() {
        $('.leverage-tab-fix .acf-tab-wrap').toggle();
    })
})

/*----------------------------------------------
2. OCDI
----------------------------------------------*/

jQuery(function ($) {

    'use strict';
    
    $('#leverage-import-demo-data a[href="#multi-page"]').click();

})

/*----------------------------------------------
3. Load
----------------------------------------------*/

jQuery(function($) {
    $('.acf-settings-wrap').addClass('ready');
})

/*----------------------------------------------
4. Release Notes
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    $('a[href="admin.php?page=theme-settings-support"]').attr('href', 'admin.php?page=leverage-release-notes');
})