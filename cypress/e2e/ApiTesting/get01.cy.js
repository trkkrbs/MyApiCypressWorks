/* 
    Gherkin language
    Given: Kelimesinden sonra on gereksinimler yazilir
           Ornegin GET Metod'u icin enpoint bir prerequisite dir.
           POST metodu icin endpoint ve payload prerequiste'dir.
    When: Kelimesinden sonra yapilacak is yazilir.
          Ornegin GET Request
          
    Then: Istenen sonuclar yazilir.
    And: Yukaridaki 3 kelime icin birden fazla giris yapilacaksa aralarina And yazilir.
    
    ornek Test case
    Given
    https://restful-booker.herokuapp.com/booking/3
    When
       User sends a GET Request
    Then
       HTTP Status code should be 200
    And
       Status text should be OK
    And 
       Response time should be less than 1200ms
    And
       Response body should be JSON Data Type
*/

describe("GET Request Method", () => {
   it("Status code, text, body, header will be tested", () => {

      //1)Set the url
      const url = "https://restful-booker.herokuapp.com/booking/3"

      //2)Set the payload


      //3)Send the GET request
      cy.request({
         method: "GET",
         url: url,
      }).then((response) => {

         //Response'i developer console'da gorelim
         console.log(response.body);

         //Response'i cypress console'da gorelim
         cy.log(JSON.stringify(response.body));

         //4)Do Assertions
         //Assert that Status Code is 200
         expect(response.status).to.eq(200);
         //Assert that Status text is OK
         expect(response.statusText).to.eq("OK");
         //Assert that Response time is less than 1200ms
         expect(response.duration).to.be.lessThan(1200);
         //Assert that Response body should be JSON Data Type
         expect(response.headers["content-type"]).to.include("application/json");
      });
   });
});

// Headless ===> Browser'i acmadan cypress' in kendi browser' i electron browser ile hizli bir sekilde test edebiliriz.
// Cross Browser Testler (Chrome, Edge, Firefox) yani diger browserlarda da test istendiginde yapilir.
// npx cypress run cypress/e2e/ApiTesting/get01.cy.js ile electronda headless test yaparak hizlica testlerimizi kontrol edebiliriz.
// npx cypress run -spec cypress/e2e/ApiTesting/get01.cy.js ile sadece sectigimiz file'i test ederiz.