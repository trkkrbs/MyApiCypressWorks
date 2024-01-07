/*
  Given
        https://jsonplaceholder.typicode.com/todos
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that there are 10 ids greater than 190
    And
        Assert that the number of userIds whose ids less than 5 is 4
    And 
        Assert that "delectus aut autem" is one of the titles whose id is less than 5
*/

describe("GET Request Method", () => {
    it("Testing with number of data", () => {

        //1)Set the url
        const pathParam = "/todos";

        //2)Set the payload


        //3)Send the GET Request
        cy.request({
            method: "GET",
            url : pathParam
        }).then((response) => {
            
            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(200);
            //Assert that there are 10 ids greater than 190
            //Oncelikle ID'si 190'dan buyuk olanlari bir variable'in icine koyalim
            const idsGreaterThan190 = response.body.filter((item) => item.id > 190);
            expect(idsGreaterThan190).to.have.lengthOf(10);
            //Assert that the number of userIds whose ids less than 5 is 4
            //Oncelikle id'si 5'ten kucuk olan datalari bir variable'in icine koyalim.
            const idsLessThan5 = response.body.filter((item) => item.id < 5);
            expect(idsLessThan5).to.have.lengthOf(4);
            //Assert that "delectus aut autem" is one of the titles whose id is less than 5
            //id'si 5'ten kucuk olanlarin title'larini al ve bir variable' in icine koy
            const titlesWhoseIdLessThan5 = response.body.filter((item) => item.id < 5).map((item) => item.title);
            expect(titlesWhoseIdLessThan5).to.include("delectus aut autem");
        })
    })
})