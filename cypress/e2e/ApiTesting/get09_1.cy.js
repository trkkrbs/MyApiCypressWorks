/*
    Given
        https://gorest.co.in/public/v1/users
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that total is "2930"
    And
        Assert that pages value is "293"
    And 
        Assert that page is "1"
    And
        Assert that limit is "10"
    And 
        Assert that previous link is "null"
    And
        Assert that current link is "https://gorest.co.in/public/v1/users?page=1"
    And
        Assert that next link is "https://gorest.co.in/public/v1/users?page=2"
    And
        Assert that number of females is less than the number of males
*/
describe("GET Request Method", () => {
    it("should verify meta data details", () => {

        //1)Set the url
        const pathParam1 = "/public";
        const pathParam2 = "/v1";
        const patParam3 = "/users";

        //2)Set the expected data
        const expectedData = {
            "status": 200,
            "pagination": {
                "total": 2944,
                "pages": 295,
                "page": 1,
                "limit": 10,
                "links": {
                    "previous": null,
                    "current": "https://gorest.co.in/public/v1/users?page=1",
                    "next": "https://gorest.co.in/public/v1/users?page=2"
                }
            }
        }

        //3)Send the get request
        cy.request({
            method: "GET",
            url : `${pathParam1}${pathParam2}${patParam3}`
        }).then((response) => {

            // Cypress her defasinda response'a gidiyor, body'ye gidiyor, meta'ya gidiyor, pagination'a gidiyor...
            // Bu islem 7 assertion isleminde gerceklesiyor.
            // Yani cypress 7 ekmek almak icin 7 kez bakkala gidiyor. Bu dogru degil arkadaslar!
            // Bir tane poset alirsiniz, bakkala bir defa gidersiniz, 7 ekmegi icine koyar isi bitirirsiniz!
            // Tekrarlanan kisim icin variable olustururuz.
            // Variable'i bakkala giderken yanimizda tasidigimiz poset gibi dusunun.
            const actualData = response.body.meta.pagination;
            // Tekrarlanan kismi posetimiz (actualData) icerisine koyduk.

            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(expectedData.status)
            //Assert that total is "2930"
            expect(actualData.total).to.eq(expectedData.pagination.total);
            //Assert that pages value is "293"
            expect(actualData.pages).to.eq(expectedData.pagination.pages);
            //Assert that page is "1"
            expect(actualData.page).to.eq(expectedData.pagination.page);
            //Assert that limit is "10"
            expect(actualData.limit).to.eq(expectedData.pagination.limit);
            //Assert that previous link is "null"
            expect(actualData.links.previous).to.eq(expectedData.pagination.links.previous);
            //Assert that current link is "https://gorest.co.in/public/v1/users?page=1"
            expect(actualData.links.current).to.eq(expectedData.pagination.links.current);
            //Assert that next link is "https://gorest.co.in/public/v1/users?page=2"
            expect(actualData.links.next).to.eq(expectedData.pagination.links.next);
            //Assert that number of females is less than the number of males
            const genders = response.body.data.map((item) => item.gender);
            const numOfFemales = genders.filter((gender) => gender === "female").length;
            const numOfMales = genders.length - numOfFemales;
            expect(numOfFemales).to.be.lessThan(numOfMales);
        })
        
    })
})