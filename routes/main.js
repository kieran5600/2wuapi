
module.exports=function(app)
{
	
app.get('/',function(req,res){
res.render('pages/index', {
	author: 'Kieran Pierce',
	page: 'Home'
	});
});

app.get('/about',function(req,res){
res.render('pages/about',{
	author: "Kieran Pierce",
	page: 'About'
	});
});

app.get('/solutions',function(req,res){
res.render('pages/solutions',{
	author: "Kieran Pierce",
	page: 'Solutions'
	});
});

}