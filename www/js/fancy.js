(function() {
  if ($(window).width() < 600) {
    $("body").addClass('sidebar-inactive');
  }

  $('#menu-burger').click(function(event) {
    event.preventDefault();
    return $("body").toggleClass('sidebar-inactive');
  });

  $('nav ul li a').click(function(event) {
    var target;
    event.preventDefault();
    target = $(this).attr("href");
    $('li.active').removeClass('active');
    $(this).parent().addClass('active');
    $(".inner_content").hide();
    return $(target).show();
  });

  $(function() {
    $(".inner_content").hide();
    return $("#cv").show();
  });

  $("#site").addClass('loaded');

  jQuery("img.svg").each(function() {
    var $img, imgClass, imgID, imgURL;
    $img = jQuery(this);
    imgID = $img.attr("id");
    imgClass = $img.attr("class");
    imgURL = $img.attr("src");
    jQuery.get(imgURL, (function(data) {
      var $svg;
      $svg = jQuery(data).find("svg");
      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      $img.replaceWith($svg);
    }), "xml");
  });

}).call(this);
