Router.configure({
  layoutTemplate: "mainTemplate"
});

Router.route("/", function() {
  this.render('testing');
});
