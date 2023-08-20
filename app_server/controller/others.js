module.exports.login=function(req,res){
    res.render('login');
};

module.exports.about=function(req,res){
    res.render('about',{title:'about'});
};

module.exports.destination=function(req,res){
    res.render('destination');
};

module.exports.blog=function(req,res){
    res.render('blog');
};

module.exports.home=function(req,res){
    res.render('home');
};
module.exports.contact=function(req,res){
    res.render('contact');
};

