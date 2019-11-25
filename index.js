const accountSid = "ACf17321eXXXXXXXXXXXX7d4c7";
const authToken = "83cf3fe9a4XXXXXXXXXXX";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is simple message from twilio server",
    from: "+15017122661",
    to: "+962785091435"
  })
  .then(message => {
    console.log(message.sid);
    console.log("log");
  })
  .catch(e => {
    console.log(e);
  });
