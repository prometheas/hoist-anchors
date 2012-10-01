hoist-anchors
=============

A jQuery plugin useful for mobile-first Responsive Design.


Usage
-------------

Consider a page that loads in from the server, as follows:

    <html>
    <head>
      <title>Test</title>
    </head>
    <body>
    
    <header>
      <a href="#menu" class="hoist-anchor">Menu</a>
    </header>
    
    <section id="content">
      <!-- some stuff -->
    </section>
    
    <footer>
      <nav id="menu">
        <ul>
          <li>Item 1</li>
          <li>Another Item</li>
          <li>Et cetera</li>
        </ul>
      </nav>
    </footer>
    
    
    <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
    <script type="text/javascript" src="hoist-anchors.js"></script>

    </body>
    </html>

You'll note that the global nav menu is at the bottom of the document, inside the `<footer>` element.  This is exactly where we _want_ it to be when the page is loaded onto a feature phone: let the visitor read the content ASAP, and follow up with navigation afterwards.

There _is_, however, a compact (single-word) anchored link at the top, which can send users straight down to the global navigation, in case it's handy.

Of course, when the page is being viewed on a large enough screen, you rather want the global navigation up at the top of the page.  In fact, you really kinda want it hoisted up into that `<header>` container – precisely where its anchor link is.

Enter hoist-anchors:

    <script type="text/javascript">
      (function( $, window, undefined ) {
        if (window.screen.width >= 768)
        {
          $.hoistAnchors();
        }
      })( jQuery, window )
    </script>

Coupled with a little bit of breakpoints-based love, your menus on JS-capable mobile devices can be jazzed up to behave like the mobile Facebook site's.  And desktop sites can get full-sized drop-down menus along the top of the page.
