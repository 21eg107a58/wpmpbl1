module.exports.login=function(req,res){
    res.render('login');
};

module.exports.about=function(req,res){
    res.render('about',{title:'about'});
};

module.exports.destination=function(req,res){
    res.render('Destinations',{title:'destinations'});
};

module.exports.blog=function(req,res){
    res.render('blog');
}