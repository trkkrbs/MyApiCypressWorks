/*
    Given
         https://restful-booker.herokuapp.com/booking/2024
    When 
         Status code is "404"
    And 
         Status text is "Not Found"
    And
         Response body include "Not Found"
    And 
         Response body does not include "TechPro Education"
    And  
         Header Server is "Cowboy"
    And  
         Header Connection is "keep-alive"
*/

describe("GET Request Method", () => {
    it("get02", () => {
        
        //1)Set the url
        const url = "https://restful-booker.herokuapp.com/booking/2099"
        
        //2)Send the payload


         //3)Send the request
         cy.request({
              method: "GET",
              url: url,
              failOnStatusCode: false //400 status code'larda testin otomatik olarak fail etmesini engellememiz icin bunu ilave etmeliyiz. Eger failOnStatusCode: false yazmazsak cypress 400 ile baslayan status code' u gordugunde hata olarak algilar ve test etmeyi durdurur.Bu kodu yazarak cypress'te negatif testleri yapabiliyoruz.
         }).then((response) => {
              
              //Developer console'a response body'i yazdirin
              console.log(response.body);

              //Cypress console'a response body'i yazdirin
              console.log(JSON.stringify(response.body));
              
              //4)Do Assertions
              //Assert that Status code is "404"
              expect(response.status).to.eq(404);
              //Assert that Status text is "Not Found"
              expect(response.statusText).to.eq("Not Found")
              //Assert that Response body include "Not Found"
              expect(response.body).to.include("Not Found")
              //Assert that Response body does not include "TechPro Education"
              expect(response.body).to.not.include("TechPro Education");
              //Assert that Header Server is "Cowboy"
              expect(response.headers["server"]).to.include("Cowboy");
              //Assert that Header Connection is "keep-alive"
              expect(response.headers["connection"]).to.eq("keep-alive");

              
         })

    })
})