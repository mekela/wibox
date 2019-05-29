// $( function() {
//   $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
//     _renderItem: function( ul, item ) {
//       var li = $( "<li>" ),
//         wrapper = $( "<div>", { text: item.label } );

//       if ( item.disabled ) {
//         li.addClass( "ui-state-disabled" );
//       }

//       $( "<span>", {
//         style: item.element.attr( "data-style" ),
//         "class": "ui-icon " + item.element.attr( "data-class" )
//       })
//         .appendTo( wrapper );

//       return li.append( wrapper ).appendTo( ul );
//     }
//   });

//   $( ".select" )
//     .iconselectmenu()
//     .iconselectmenu( "menuWidget" )
//       .addClass( "ui-menu-icons" );
// } );

$( ".navbar__mobile-toggle" ).click(function() {
    $( ".left-sidebar-menu" ).toggleClass( "open" );
    $( ".left-sidebar-user" ).removeClass( "open" );
  });
$( ".nav-menu-hide" ).click(function() {
$( ".left-sidebar-menu" ).removeClass( "open" );
});
$( ".menu-trigger-user" ).click(function() {
    $( ".left-sidebar-user" ).toggleClass( "open" );
    $( ".left-sidebar-menu" ).removeClass( "open" );
  });
$( ".nav-user-hide" ).click(function() {
$( ".left-sidebar-user" ).removeClass( "open" );
});