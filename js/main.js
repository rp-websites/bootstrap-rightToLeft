$(document).ready(function () {

  $('.drop-main').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
    $(".wrapper").addClass("drop-overlay");
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.drop-main').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
    $(".wrapper").removeClass("drop-overlay");
  });

  //Dropdown mega
  $('.dropdown-menu').on('click', function(e){
    if($(this).hasClass('dropdown-menu-form')){
      e.stopPropagation();
    }
  });

//Load more
  size_li = $("#deal-more .deal-el").size();
  x=9;
  $('#deal-more .deal-el:lt('+x+')').show();
  $('#loadMore').click(function () {
    x= (x+3 <= size_li) ? x+3 : size_li;
    $('#deal-more .deal-el:lt('+x+')').show();
  });


  if ($('.light-slider').length>0) {
    $('#image-gallery').lightSlider({
      gallery:true,
      item:1,
      thumbItem:4,
      slideMargin: 0,
      speed:500,
	  loop: true,      rtl:true,
      thumbMargin: 25,
      controls: false,
      prevHtml: "<i class='fa fa-angle-left fa-2x'></i>",
      nextHtml: "<i class='fa fa-angle-right fa-2x'></i>",
      responsive : [
        {
          breakpoint:900,
          settings: {
            thumbItem: 0,
            controls: true,
            gallery: false
          }
        }
      ],
      onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
        $(".lSPager li:first-child").addClass("open-video");
        $("#image-gallery li.lslide:first-child").addClass("video-mobile").prepend("<a href='https://www.youtube.com/' target='_blank'></a>");
        $(".lSPager li:first-child a").click(function(){
          window.open(
              'https://www.youtube.com/',
              '_blank'
          );
        });

      }
    });
  }
  if ($('.home-sw').length>0) {
    var swiper = new Swiper('.home-sw', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      allowPageScroll:"vertical",
      preventDefaultEvents: false,
      excludedElements: ".noSwipe",
      slidesPerView: 1,
      simulateTouch: false,
      spaceBetween: 40,
      autoplay: 3000
    });
  }

  $('#collapseSearch').on('show.bs.collapse', function () {
    $(".search-open-el").addClass("search-opened");
  });

  $('#collapseSearch').on('hide.bs.collapse', function () {
    $(".search-open-el").removeClass("search-opened");
  });

//Hide placeholder on input focus
  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
  }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


  //Model Form validation
  if($("#leads-form").length>0) {
    $('#leads-form').validate({
      highlight: function(element) {
        $(element).parents('.has-feedback').addClass('error');
      },
      unhighlight: function(element) {
        $(element).parents('.has-feedback').removeClass('error');
      },
      success: function (element){
        $(element).parents(".has-feedback").removeClass("error").addClass("valid");
      },
      errorElement: 'label',
      errorLabelContainer: ".form-errors",
      rules: {
        field_name: {
          required: true
        },
        field_phone: {
          required: true,
          number: true
        }
      },
      submitHandler: function (form) {
      }
    });
  }
  if($("#leads-form-modal").length>0) {
    $('#leads-form-modal').validate({
      highlight: function(element) {
        $(element).parents('.has-feedback').addClass('error');
      },
      unhighlight: function(element) {
        $(element).parents('.has-feedback').removeClass('error');
      },
      success: function (element){
        $(element).parents(".has-feedback").removeClass("error").addClass("valid");
      },
      errorElement: 'label',
      errorLabelContainer: ".form-errors",
      rules: {
        field_name: {
          required: true
        },
        field_phone: {
          required: true,
          number: true
        }
      },
      submitHandler: function (form) {
      }
    });
  }
  if($("#results-form").length>0) {
    $.validator.addMethod(
        "email_custom",
        function (value)
        {
          return $.trim(value).match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        }
    );
    $('#results-form').validate({
      highlight: function(element) {
        $(element).parents('.has-feedback').addClass('error');
      },
      unhighlight: function(element) {
        $(element).parents('.has-feedback').removeClass('error');
      },
      success: function (element){
        $(element).parents(".has-feedback").removeClass("error").addClass("valid");
      },
      errorElement: 'label',
      errorLabelContainer: ".form-errors",
      rules: {
        field_name: {
          required: true
        },
        field_surname: {
          required: true
        },
        field_phone: {
          required: true,
          number: true
        },
        field_email: {
          required: true,
          email: true
        }
      },
      submitHandler: function (form) {
      }
    });
  }
  if($("#contact-form").length>0) {
    $.validator.addMethod(
        "email_custom",
        function (value)
        {
          return $.trim(value).match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        }
    );
    $('#contact-form').validate({
      ignore: [],
      highlight: function(element) {
        $(element).parents('.has-feedback').addClass('error');
      },
      unhighlight: function(element) {
        $(element).parents('.has-feedback').removeClass('error');
      },
      success: function (element){
        $(element).parents(".has-feedback").removeClass("error").addClass("valid");
      },
      errorElement: 'label',
      errorLabelContainer: ".form-errors",
      rules: {
        field_name: {
          required: true
        },
        field_surname: {
          required: true
        },
        field_select: {
          required: true
        },
        field_select_add: {
          required: true
        },
        field_phone: {
          required: true,
          number: true
        },
        field_phone_add: {
          required: true,
          number: true
        },
        field_email: {
          required: true,
          email: true
        },
        field_desc: {
          required: true
        }
      },
      submitHandler: function (form) {
      }
    });

  }
  $('.selectpicker').selectpicker().change(function(){
    $(this).valid()
  });
  //Custom Select
  if($(".selectpicker").length>0) {
    $('.selectpicker').selectpicker({
      rtl: true
    });
  }
  $("select.selectpicker").focus(function(){
    $(this).next(".bootstrap-select").find('.selectpicker').focus();
  });
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
  }
  jQuery.extend(jQuery.validator.messages, {
    required: "השדה אינו תקין",
    email: "השדה אינו תקין",
    number: "השדה אינו תקין"
  });

  //Model Page Popover Custom HTML

  $('.model-calc').popover({
    html: true,
    content: $('#model-calc-content').html()
  });
  $('.model-calc').click(function (e) {
    e.stopPropagation();
    $(".ex24").slider({});
  });
  $(document).click(function (e) {
    if (($('.popover').has(e.target).length == 0) || $(e.target).is('.close')) {
      $('.model-calc').popover('hide');
    }
  });
  $('body').on('hidden.bs.popover', function (e) {
    $(this).css('cursor', 'pointer');
    $(e.target).data("bs.popover").inState.click = false;
  });

  //Header Chat Collapse
  $('.close-chat').on("click", function(){
    $('#chat-collapse').collapse('hide');

  });
  $('#chat-collapse').on('shown.bs.collapse', function () {
    $(".wrapper").addClass("drop-overlay");
  });

  $('#chat-collapse').on('hidden.bs.collapse', function () {
    $(".wrapper").removeClass("drop-overlay");
  });
  $(document).on('click', function(e) {
    if (!$(e.target).is('a')) {
      $('#chat-collapse').collapse('hide');
    }
  });

});