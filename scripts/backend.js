$(() => {

// var slider = document.getElementById("myRange1");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
// output.innerHTML = this.value;
// }

var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...."
  };
  firebase.initializeApp(config);

$(".slider").change(function(event){
    
    let values = {
        history : $("#myRangeH").val(),
        entertainment : $("#myRangeE").val(),
        arts : $("#myRangeA").val(),
        nature : $("#myRangeN").val(),
        relaxation : $("#myRangeR").val(),
        food : $("#myRangeF").val()

    }

    var xttp = new XMLHttpRequest();
    xttp.open("POST", "", true);
    xttp.send(values);



    /*$.post('/xyz' , values,
    (data) => {
        $(".one1").append (`
         <img src="" alt=""> 
        `
          )

          $(".two2").append (`
         <img src="" alt=""> 
        `
          )

          $(".three3").append (`
         <img src="" alt=""> 
        `
          )

          $(".four4").append (`
         <img src="" alt=""> 
        `
          )

          $(".five5").append (`
         <img src="" alt=""> 
        `
          )

          $(".six6").append (`
         <img src="" alt=""> 
        `
          )

          $(".seven7").append (`
         <img src="" alt=""> 
        `
          )

          $(".eight8").append (`
          <img src="" alt=""> 
         `
           )

           $(".nine9").append (`
           <img src="" alt=""> 
          `
            )

            $(".ten10").append (`
            <img src="" alt=""> 
           `
             )
            $(".eleven11").append (`
             <img src="" alt=""> 
            `
              )
          
        
    }
    )*/
})


})