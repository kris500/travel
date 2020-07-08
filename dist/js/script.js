window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

  // modal

$(document).ready(function($) {

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  //нажатие на крестик modal__close закрывает все окна медленно
  $('.modal_close').on('click', function() {
    $('.overlay, #consultation, #find, #thanks').fadeOut('slow');
  }); 

  //кнопка купить
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal_descr').text($('.catalog-item__subtitle').eq(i).text()); //берет текст из modal.subtitle и вставляет в модальное окно
      $('.overlay, #order').fadeIn('slow');
    });
  });
	
	

// валидация форм + скрипт validate.min.js
  function validateForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');


// в поле номера телефона => +7(___) __-__-__

  $("input[name=phone]").mask("+7 (999) 999-99-99");

// отправка на почту данных от пользователя

  $('form').submit(function(e) {
    e.preventDefault(); //нет перезагрузки, а подгружение
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
  
      $('form').trigger('reset');
    });
    return false;
  });

  // скролл наверх

  $(window).scroll(function() {
    if ($(this).scrollTop() >1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  //для плавности скролла

  $("a[href^='#up']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
	});

	new WOW().init();
});

