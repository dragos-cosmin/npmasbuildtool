const should=require('should');
const greeter=require('../lib/tsCode.js');

describe("Typescript is compiled ok", function(){
    it("when this is passed", function(){
        const g=new greeter();
        g.greet("Yoda").should.equal("A type-scripting greeting to you, Yoda");
    });
});