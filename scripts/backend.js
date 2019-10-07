$(() => {



// var config = {
//     apiKey: "...",
//     authDomain: "...",
//     databaseURL: "...",
//     projectId: "...",
//     storageBucket: "...",
//     messagingSenderId: "...."
//   };
//   firebase.initializeApp(config);

$(".slider").change(function(event){
    console.log($("#myRangeH").val());
    let values = {
        history : $("#myRangeH").val(),
        entertainment : $("#myRangeE").val(),
        arts : $("#myRangeA").val(),
        nature : $("#myRangeN").val(),
        relaxation : $("#myRangeR").val(),
        food : $("#myRangeF").val(),
    }
    $.post(
        //url,
        values,
        (data) => {
            $(".one1").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })

            $(".two2").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })

            $(".three3").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".four4").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".five5").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".six6").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".seven7").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".eight8").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".nine9").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".ten10").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })
            $(".eleven11").each((i,v) => {
                $(v).append (`<img src="`+ data.cqImagePath +`" alt="">`);
                // $(v).append (data.cqImage.image);
                // data -> json Object
                // cqImage -> id of the image for code quest.
                // image-> attribute int the table
            })


        }
    )
    });

    // data = {
    //     cqurl : ""
    // }

    // var xttp = new XMLHttpRequest();
    // xttp.open("POST", "", true);
    // xttp.send(values);



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
