Router.configure({
  layoutTemplate: "mainTemplate",
  notFoundTemplate: "notFound",
  loadingTemplate: "loading",
  defaultBreadcrumbLastLink: false
});

Router.route("/",function() {
    this.render("testing");
});

Router.route("/(.*)",function() {
    this.render("notFound");
});
