exports.loginController =  (req,res)  =>{
    res.render('auth/login', {
        pagina: 'Login'
    });
}