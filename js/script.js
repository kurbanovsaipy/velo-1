//Menu
$('.header__btn').click(function() {
  $('.header__list').slideToggle();
  $(this).toggleClass('header__btn--close');
})
$('.header__item--catalog').click(function() {
   setTimeout(function(){

       $("body").toggleClass("mm-ocd-opened");
      $(".mm-ocd.mm-ocd--left").toggleClass("mm-ocd--open");
    }, 500);
})

if (window.innerWidth < 1201) {
  $('.search__open').click(function() {
    $('.search__wrap').slideDown();
    $('.search__input').focus();
  });
  $('.search__close').click(function() {
    $('.search__wrap').slideUp();
  });
  $('.nav__link--search').click(function() {
    $('.search__wrap').slideToggle();
    $('.search__input').focus();
  })
}

$('.menu__show').click(function() {
  $('.menu__block').toggleClass('menu__block--short');
})

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#menu", {
           "offCanvas": {
              "position": "left"
           },
           "theme": "light"
        });
    }
);

var menu = new MmenuLight( document.querySelector( '#menu' ), 'all');
    var navigator = menu.navigation({
      selectedClass: 'Selected',
      slidingSubmenus: true,
      theme: 'light',
      title: 'Каталог'
    });
    var drawer = menu.offcanvas({
      position: 'left'
    });
    document.querySelector( 'a[href="#menu"]' ).addEventListener( 'click', evnt => {
      evnt.preventDefault();
      drawer.open();
    });


// change

$(document).ready(function(){
  $('.mm-spn').append('<div class="mm-menu-custom-close"></div>');

  $('.mm-menu-custom-close').click(function(){
    drawer.close();
  });
});


// change

var megamenu_drop;
$('.header__dropmenu ul a').on('mouseover', function() {
    var self = $(this);
    megamenu_drop = setTimeout(function() {
        var id = self.data('id');
        menu_level = self.parents('ul').data('menu-level') + 1;


        self.parents('ul').find('a').removeClass('menu__catalog--active');
        self.addClass('menu__catalog--active');
        while (menu_level < 5) {
            $('.catalog__menu__col__item[data-menu-level="' + menu_level + '"]').removeClass('active');
            $('.catalog__menu__col__item[data-menu-level="' + menu_level + '"][data-parent-id="' + id + '"]').addClass('active');
            id = $('ul.catalog__menu__col__item[data-menu-level="' + menu_level + '"].active a.active').data('id');
            menu_level++


        }
        $('html').trigger('scroll')
    }, 50)
});
$('.header__dropmenu .level-1 > li:first-child a').mouseover();


$('.header__dropmenu ul a').on('mouseout', function() {
    clearTimeout(megamenu_drop)
});


// change
$(document).ready(function() {
  let options = {
    maxWidth: 320,
    theme: ['hint-custom'],
  };

  if($('html').width() < 1050){
    options.trigger = 'custom';

    options.triggerOpen = {tap: true};

    options.triggerClose = {tap: true};
  }

  $('.tooltip-plugin').tooltipster(options);
});

// $(document).on('touchend', 'html', function(){
//   if(!$(this).hasClass('tooltipstered')){
//     $(this).tooltipster('open');
//   }
// });

// $(document).on('touchend', '.hint', function(){
//   if($(this).hasClass('tooltipstered')){
//     $(this).tooltipster('open');
//   }
// });
// change

