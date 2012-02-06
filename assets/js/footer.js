function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showPage(hash) {
    var pageName = hash.replace('#', ''),
        $page = $('#_'+ pageName), // Map window hash to underscored page ID (underscore ensures page ID is not found by browser, so no jumping)
        $nav = $('#nav').find('> ul > li > a'),
        pre = '';
        
    _gauges.push(['track']);

    $nav.removeClass('active');
    $($nav + '[href='+ hash +']').addClass('active');

    $('#pages').find('> li').removeClass('active');
    $page.addClass('active');

    if (pageName) {
        pre = capitalise(pageName) +' → ';
    }

    document.title = pre +'RefineSlide';

    _gaq.push(['_trackPageview', '/'+ hash]);
}

$(window).on('hashchange', function() {
    showPage(location.hash);
});

$(document).ready(function() {
    $('#images').refineSlide();

    if (location.hash) { // If a page hash is navigated to directly
        showPage(location.hash);
    }

    SyntaxHighlighter.autoloader(
      'js   assets/js/shBrushJScript.js',
      'css  assets/js/shBrushCss.js',
      'html assets/js/shBrushXml.js'
    );
    SyntaxHighlighter.all(); // Call syntax highlighting for <pre> tags
});