const bodyParser = require("body-parser");
let serveStatic = require("serve-static");
let history = require("connect-history-api-fallback");

let express = require("express"),
  path = require("path"),
  app = express(),
  cors = require("cors"),
  sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID);

app.use(history());
app.use(bodyParser());
app.use(cors());

const PORT = process.env.PORT || 3010;

app.set("port", process.env.PORT || 3010);

app.use(serveStatic(path.join(__dirname, "/dist")));

app.listen(PORT, function() {
  console.log("Node.js server is running on port " + PORT);
});

app.post("/api", (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body.messageToSend;

  const msg = {
    to: "martin1olasz@gmail.com",
    from: email,
    subject: subject,
    text: name,
    html: `<strong>${message}</strong><p>${name}</p>`,
  };
  sgMail.send(msg);
  res.send("Successfully! Sent mail");
});
