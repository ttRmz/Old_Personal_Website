$(document).ready(function() {
  $(document).on('scroll', onScroll)

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault()
    $(document).off('scroll')

    $('a').each(function() {
      $(this).removeClass('active')
    })
    $(this).addClass('active')

    var target = this.hash,
      menu = target
    $target = $(target)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        700,
        'swing',
        function() {
          window.location.hash = target
          $(document).on('scroll', onScroll)
        }
      )
  })
})

//scrollspy
function onScroll(event) {
  var scrollPos = $(document).scrollTop()
  $('.js-links').each(function() {
    var currLink = $(this)
    var refElement = $(currLink.attr('href'))
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('.js-links').removeClass('active')
      currLink.addClass('active')
    } else {
      currLink.removeClass('active')
    }
  })
}
