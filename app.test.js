const supertest = require('supertest');
const app = require('./index');



describe("app should", () => {
    it("respond with token", (done) => {
        supertest(app)
            .post('/authenticate')
            .send({username: "raghu", password: "xyz"})
            .set('Accecpt', 'application/json')
            .expect(200)
            .end((error, res) => {
                if(error) return done(error)
                done();
            })
    })
});