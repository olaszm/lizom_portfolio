const sendGrid = require("@sendgrid/mail");

sendGrid.setApiKey(process.env.VUE_APP_SENDGRID);

export const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    text,
  };

  sendGrid.send(msg).then(
    () => {},
    (err) => {
      if (err.response) {
        console.log(err.response.body);
      }
    }
  );
};
