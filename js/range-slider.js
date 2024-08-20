// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 500,
    max: 110000,
    values: [ 5000, 100000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + "p" );
      $( "#amount-max" ).val( ui.values[ 1 ] + "p"  );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + "p"  );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + "p"  );
});