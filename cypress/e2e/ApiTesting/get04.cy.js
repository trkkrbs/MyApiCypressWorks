/*
Given
            https://jsonplaceholder.typicode.com/todos
When
	 	    I send a GET request to the Url
And
	        Request Headers accept type is "application/json"
Then
            HTTP Status Code should be 200
And
            Status text is OK
And 
            Response time is less than 300 ms
And
		    Response format should be "application/json"
And
	        There should be 200 todos
And
	        "quis eius est sint explicabo" should be one of the todos title
And
	        2, 7, and 9 should be among the userIds
*/

describe("GET Request Method", () => {

    it("Request is JSON, number of data, title, userId", () => {
        //1)Set the url
        const pathParam = "/todos";//Base URL'in sonuna eklenen ve "/" ile baslayan eklentiye "Path Parameter" denir
                                   //Sadece baseUrl'i kullanmak isterseniz const pathParam = "/"; yaziniz.

        //2)Set the payload

        //3)Send the GET request
        cy.request({
            method: "GET",
            url: pathParam,
            headers: {
                Accept: "application/json"
            }
        }).then((response) => {

            //4)Do Assertions
            //HTTP Status Code should be 200
            expect(response.status).to.eq(200);
            //Status text is OK
            expect(response.statusText).to.eq("OK");
            //Response time is less than 1200 ms
            expect(response.duration).to.be.lessThan(1200);
            //Response format should be "application/json"
            expect(response.headers["content-type"]).to.include("application/json");
            //There should be 200 todos
            expect(response.body).to.have.lengthOf(200);
            //"quis eius est sint explicabo" should be one of the todos title
            //Once tum title'lari bir araya toplamaliyim
            const titles = response.body.map((item) => item.title);
            expect(titles).to.include("quis eius est sint explicabo");
            //2, 7, and 9 should be among the userIds
            //Once tum userId'leri bir araya toplayalim
            const userIds = response.body.map((item) => item.userId);
            expect(userIds).to.include.members([2, 7, 9]);
        })

    })
})