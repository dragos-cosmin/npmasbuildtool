let app=require('../');
let request=require('supertest').agent(app.listen());

describe("Our amazing site", function(){
    it("has a nice welcoming message", function(done){
        request
        .get("/")
        .expect("Koa says Hello!")
        .end(done);
    });
});