function getRoot(req, res) {
    res.render("index", {});
}
  



  function getSignup(req, res) {
    if (req.isAuthenticated()) {
      const { username, password } = req.user;
      const user = { username, password };
      res.render("profileUser", { user });
    } else {
      res.render("signup");
    }
  }

  function postSignup(req, res) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render("profileUser", { user });
  }

  function getFailsignup(req, res) {
    res.render("signup-error");
  }


  
  function getLogin(req, res) {
    if (req.isAuthenticated()) {
        const { username, password } = req.user;
        const user = { username, password };
        res.render("profileUser", { user });
      } else {
        res.render("login");
      }
  }

function postLogin(req, res){
    const { username, password } = req.user;
  const user = { username, password };
  res.render("profileUser", { user });
}

function getFaillogin(req, res) {
    res.render("faillogin")
  }



function getLogout(req, res){
  const { username, password } = req.user;
  const user = { username, password };
    req.session.destroy((err) => {
      if (err) {        
        console.log(err)
            res.send("no se pudo deslogear");
      } else {
        
            res.render("logout", {user} );
            
            setTimeout(
              function(){res.redirect("/login")}, 
              2000) 
        }
    });
}

function failRoute(req, res) {
    res.status(404).render("routing-error", {});
  }

module.exports = {
    getRoot,
    getLogin,
    getSignup,
    postLogin,
    postSignup,
    getFaillogin,
    getFailsignup,
    getLogout,
    failRoute,
  };