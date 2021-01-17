// когда страница загрузится
$(document).ready(function () {
    // скрываем все подуровни
    $('.menu li div.dropdown').hide();

    // описываем событие li:hover
    $('.menu__item').hover(
        // over
        function () {
            // для красоты li добавим класс с другим фоном
            $(this).addClass('active');
            // отображаем скрытый список
            $('div.dropdown', this).show();
        },
        // out
        function () {
            // нужно убрать добавлений класс
            $(this).removeClass('active');
            // скрываем список
            $('div.dropdown', this).hide();
        },
    )

    /* Start Catalog Menu */
    $('.catalog-menu .catalog-menu__dropdown__first').hide();
    $('.catalog-menu .catalog-menu__dropdown__second').hide();

    $('.catalog-menu__item').hover(
        function () {
            $(this).addClass('active');
            $('.catalog-menu__dropdown__first', this).show();
        },
        function () {
            $(this).removeClass('active');
            $('.catalog-menu__dropdown__first', this).hide();
        }
    )

    $('.catalog-menu__dropdown__first-item').hover(
        function () {
            $(this).addClass('active');
            $(".catalog-menu__dropdown__second", this).show();

        },
        function () {
            $(this).removeClass('active');
            $(".catalog-menu__dropdown__second", this).hide();
        }
    )
    /* End Catalog Menu */

    //Начало кода для выпадащего меню с городами
    $('.header__contact-dropdown__contact-dorp-second').hide();
    $('.header__contact-dropdown__contact-dorp__title-second').hover(
        function () {
            $('.header__contact-dropdown__contact-dorp-first').hide();
            $('.header__contact-dropdown__contact-dorp-second').show();
        },
        function () {
            $('.header__contact-dropdown__contact-dorp-first').show();
            $('.header__contact-dropdown__contact-dorp-second').hide();
        }
    );
    //Конец кода для выпадащего меню с городами
});

$('.dropdown-contact-nav__btn').click(function () {
    /*     $('.dropdown-contact-nav__content').fadeOut(); */
    var dataCategory = $(this).attr('data-category');
    $('div.dropdown-contact-nav__content[data-category=' + dataCategory + ']').show();

});

