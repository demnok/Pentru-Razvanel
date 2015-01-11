//crearea hartii prin unificarea coordonatelor calculate de mana in procente a tarilor

// <=== AICI ===>

$(document).ready(function(){ 
  
  var a=$(window).width();
  var b=$(window).height();

  $(function(){
    $('.imgs').each(function(){
      var c = $(this).css("margin-left");
      console.log(c)
    });
  });

});

// <=== AICI ===> 

$(function() {
    // memoram tarile si steagurile
    var $steaguri = $( ".steag" ),
      $tari = $( ".imgs" );
 
    // permitem steagurilor sa fie "draggable"
    $steaguri.draggable({
      revert: "valid"
    });
 
    // permitem tarilor sa accepte steagurile
  $tari.droppable({
      accept: ".steag",
      activeClass:"lumina",
      drop: function( event, ui ) {
      	Oversteag( ui.draggable , this);

      }
    });
 $("#harta").droppable({
 	accept: ".steag",
      drop: function( event, ui ) {
      	Oversteagharta( ui.draggable , this);
      }
 });
    // let the gallery be droppable as well, accepting items from the trash
    $steaguri.droppable({
      accept: ".tara",
      drop: function( event, ui ) {
        recycleImage( ui.draggable , ui.droppable);
      }
    });
*/
// inceput pentru stabilirea coordonartelor de mana
$(".imgs").draggable();
$("#body").droppable({
//sfarsit pentru stabilirea coordonatelor de mana
});
//functia de punere a steagului pe tara
  /*
function Oversteagharta($item , $location)
{
var $newitem=$item.clone();
$newitem.appendTo($location);



  };
});
*/
// functia de verificare daca steagurile sunt bine puse
/*
function Check(){
  for (x in ".imgs")
  {
    if (x.attr(''))
  }
}
*/
function Oversteag($item , $location)
{
var $newitem=$item.clone();
$newitem.appendTo($location);
$newitem.css("left","0px").css("top","0px").css("width","100%");
$newitem.css("height","100%").css("background-size","100%");


  };
