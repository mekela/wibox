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
  $('ul').on('click', '.menu-list-erase', function(){
  $( this ).parent('li').detach();
  });
$( ".drag-menu__trigger" ).click(function() {
  $( ".menu-list" ).slideToggle( );
  $( ".drag-menu__sortable" ).toggleClass( "active" );
  $( ".drag-menu__static" ).toggleClass( "active" );
});
$( ".filter__trigger" ).click(function() {
  $( ".filter__drop" ).toggleClass( "active" );
});
//show option
$( ".show-wifi-table__options" ).click(function() {
  $( this ).parent().children(".hidden-option").show(  );
  $( this ).hide(  );
});
$( ".hide-wifi-table__options" ).click(function() {
  $( this ).parent().children(".show-wifi-table__options").show(  );
  $( this ).parent().children(".hidden-option").hide(  );
});