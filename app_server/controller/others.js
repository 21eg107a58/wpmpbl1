module.exports.login=function(req,res){
    res.render('login');
};

module.exports.about=function(req,res){
    res.render('about',{title:'about'});
};
module.exports.destination=function(req,res){
    res.render('destination');
}

module.exports.paris=function(req,res){
    res.render('paris');
};

module.exports.blog=function(req,res){
    res.render('blog');
};


module.exports.contact=function(req,res){
    res.render('contact');
};
module.exports.bali=function(req,res){
    res.render('bali');
};
module.exports.india=function(req,res){
    res.render('india');
};

