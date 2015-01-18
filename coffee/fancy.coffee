if $(window).width() < 600
	$("body").addClass 'sidebar-inactive'

$('#menu-burger').click (event) ->
	event.preventDefault();
	$("body").toggleClass 'sidebar-inactive'

$('nav ul li a').click (event) ->
  event.preventDefault();
  target = $(this).attr("href")
  $('li.active').removeClass 'active'
  $(this).parent().addClass 'active'
  $(".inner_content").hide()
  $(target).show()



$ ->
  $(".inner_content").hide()
  $("#cv").show()
	$("#site").addClass 'loaded'

jQuery("img.svg").each ->
  $img = jQuery(this)
  imgID = $img.attr("id")
  imgClass = $img.attr("class")
  imgURL = $img.attr("src")
  jQuery.get imgURL, ((data) ->

    # Get the SVG tag, ignore the rest
    $svg = jQuery(data).find("svg")

    # Add replaced image's ID to the new SVG
    $svg = $svg.attr("id", imgID)  if typeof imgID isnt "undefined"

    # Add replaced image's classes to the new SVG
    $svg = $svg.attr("class", imgClass + " replaced-svg")  if typeof imgClass isnt "undefined"

    # Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr("xmlns:a")

    # Replace image with new SVG
    $img.replaceWith $svg
    return
  ), "xml"
  return
