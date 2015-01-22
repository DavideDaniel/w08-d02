var button = document.querySelector( "button" )

var pullBills = function ( bioId ) {
     var bills = [];
     var billUrl =
          "https://congress.api.sunlightfoundation.com/bills?apikey=SUNLIGHTKEY&sponsor_id=" +
          bioId
     var xhr = new XMLHttpRequest();
     xhr.open( "GET", billUrl );
     xhr.addEventListener( "load", function () {

          var billObjects = JSON.parse( xhr.responseText )
          console.log( "bill" + billObjects );
          var ul = document.querySelector( "ul" )

          for ( var i = 0; i < billObjects.results.length; i++ ) {
               bills.push( billObjects.results[ i ] )

          };

          bills.forEach( function ( bill ) {
               console.log( bill.bill_id );
               var li = document.createElement( "li" )
               li.innerText = bill.official_title
               ul.appendChild( li )
               console.log( bill.official_title );
          } )

     } )
     xhr.send()
}
button.addEventListener( "click", function () {

     var input = document.querySelector( "input" );
     var name = input.value;
     console.log( name );
     var url =
          "https://congress.api.sunlightfoundation.com/legislators?fields=bioguide_id&apikey=SUNLIGHTKEY&last_name=" +
          name
     var xhr = new XMLHttpRequest();
     xhr.open( "GET", url );
     xhr.addEventListener( "load", function () {

               var senatorObj = JSON.parse( xhr.responseText )
               console.log( "senator" + senatorObj );
               var h2 = document.querySelector( "h2" )

               var bioId = senatorObj.results[ 0 ].bioguide_id;
               console.log( bioId );
               //W000817
               pullBills( bioId )
               console.log( "inside senator" + bioId );
          }

     )

     xhr.send()
} )