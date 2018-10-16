import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.isDevelopment)
    process.env.ROOT_URL = "http://localhost:3000";

  console.log(process.env.ROOT_URL);
  __meteor_runtime_config__:process.env.ROOT_URL;
});
