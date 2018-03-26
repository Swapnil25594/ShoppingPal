module.exports = function (app) {
    var router = app.loopback.Router();

    var Subcategory = app.models.Subcategory;
    console.log(Subcategory);
    router.get('/login', function(req,res){
        res.send('Logged in successfully...');
    });
    app.use(router);
}