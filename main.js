
$(document).ready(function(){
  var name;
  var splicePokeName = 'rapidash';
  var pokeList;

    $.get("https://pokeapi.co/api/v2/pokemon\/?limit=157&offset=0")
    .then(function(pokemon){
      pokeList = pokemon.results;
      //console.log(pokeList);
      return pokeList
})

   $('.well').submit(function(event){
      event.preventDefault();

      name = pokeList[pokePicker()].name;
      name = name.toLowerCase().split('');

      if(name.length===5){
         splicePokeName = name.splice(0,2).join('');
        }else if(name.length >=6){
         splicePokeName = name.splice(0,3).join('');
     }
        var user = $('#firstName').val();
        var resultName = user.concat(splicePokeName)
        $('#returnInfo').text(resultName)
        console.log(user)
  })
//})


 function pokePicker(){
   return Math.floor(Math.random() * pokeList.length)
 }
})
// $(".button").on("click", function(x){
//   $.ajax(
//     { url : "http://",
//       type: "POST",
//       data : {
//         firstName: $("#firstName").val(),
//         role : $("#roles option:selected").text()},
//       success:function(data, textStatus, jqXHR)
//       {
//         $('.save-status').hide().append("Success!").fadeIn(500).delay(2000).fadeOut(500);
//       },
//       error: function(jqXHR, textStatus, errorThrown)
//       {
//         $('.save-status').hide().append("Not Quite.").fadeIn(500).delay(2000).fadeOut(500);
//       }
//   });
//   x.preventDefault();
// });
//
// $("#form").submit();
//data.data.sprites.front_default
