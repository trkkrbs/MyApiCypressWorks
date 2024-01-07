/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    When
        User sends a GET Request to the endpoint
    Then
        Status code is 200
    And
        Status text is OK
    And 
        Response time is less than 300ms
    And
        Response body is JSON data type
    And
        "title" is "quis eius est sint explicabo"
    And 
        "completed" is "true"
    And
        "userId" is "10"
*/

describe("GET Request Method", () => {
    it("Status code, text, response time, data type, body details with hard assertion", () => {

        //1)Set the url
        const url = "https://jsonplaceholder.typicode.com/todos/198"

        //2)Set the payload

        
        //3)Send the GET Request
        cy.request({
            method: "GET",
            url: url,
        }).then((response) => {
            console.log(response.body);
            console.log(JSON.stringify(response.body));

            //4)Do Assertions
            //==> Asagidaki Assertion'lar Hard Assertion'dur.
            //Assert that Status code is 200
            expect(response.status).to.eq(200);
            //Assert that Status text is OK
            expect(response.statusText).to.eq("OK");
            //Assert that Response time is less than 1200ms
            expect(response.duration).to.be.lessThan(1200);
            //Assert that Response body is JSON data type
            expect(response.headers["content-type"]).to.include("application/json");
            //Assert that "title" is "quis eius est sint explicabo"
            expect(response.body.title).to.eq("quis eius est sint explicabo");
            //Assert that "completed" is "true"
            expect(response.body.completed).to.be.true;
            //Assert that "userId" is "10"
            expect(response.body.userId).to.eq(10);
        })
    })

    //2.Yol: Bu soruyu "Soft Assertion" kullanarak cozelim
    //       Bunun icin command.js file'ina iki method ekledim ama zor oldugu icin anlatmayacagim
    //       Ayrica commands.js file 'ina ekledigim methodlar sadece degerlerin esit, kucuk, buyuk olmasini
    //       ve bir text'i icerip icermedigini kontrol ediyor. Bunlara benzer yeni durumlarda da ihtiyac halinde eklenebilir.

    it("Status code, text, response time, data type, body details with soft assertion", () => {

        //1)Set the url
        const url = "https://jsonplaceholder.typicode.com/todos/198"

        //2)Set the payload

        
        //3)Send the GET Request
        cy.request({
            method: "GET",
            url: url,
        }).then((response) => {
            console.log(response.body);
            console.log(JSON.stringify(response.body));

            //4)Do Soft Assertions
            //Assert that Status code is 200
            cy.softAssert(response.status, 200, "Status code should have been 200", "equal");
            //Assert that Status text is OK 
            cy.softAssert(response.statusText, "OK", "Status text should have been OK", "equal");
            //Assert that Response time is less than 1200ms
            cy.softAssert(response.duration, 1200, "Response time should have been less than 1200", "lessThan");
            //Assert that Response body is JSON data type
            cy.softAssert(response.headers["content-type"], "application/json", "Response body should have been JSON", "include");
            //Assert that "title" is "quis eius est sint explicabo"
            cy.softAssert(response.body.title, "quis eius est sint explicabo", "Title is wrong", "equal");
            //Assert that "completed" is "true"
            cy.softAssert(response.body.completed, true , "Completed is wrong", "equal");
            //Assert that "userId" is "10"
            cy.softAssert(response.body.userId, 10 , "User id is wrong", "equal");
            
        })
        //Bunu kullanmazsak kalan assertion oldugu halde passed gosterir.
        cy.assertAll();
    })
})

//1) birden fazla file'in calismasini istemedigimizde;
// npx cypress run --spec "copyrelativepath" ile run edersek sadece calistirdigimiz file test edilir.

//2) ayni text file icerisinde birden fazla test methodu olabilir bu durumda;
// it.only() yaparak sadece o methodun calismasini saglariz.
// it.skip() yaparak o methodun calismasini engelleyebiliriz.


