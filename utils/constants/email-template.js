export const generateEmailTemplate = ({ name, email, message }) => `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f4;
      }
      .email-container {
        background-color: #ffffff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
      }
      .header {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #0073e6;
        margin-bottom: 15px;
      }
      .details-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }
      .details-table td {
        padding: 10px;
        border-bottom: 1px solid #eeeeee;
      }
      .details-table td:first-child {
        font-weight: bold;
        color: #555;
        width: 30%;
      }
      .message-box {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 5px;
        margin-top: 10px;
        font-style: italic;
      }
      .reply-button {
        width: 100%;
        text-align: center;
        background-color: #0073e6;
        color: white;
        padding: 12px;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        margin-top: 20px;
        border: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
      .reply-button:hover {
        background-color: #005bb5;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #888;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">EDGE: EXPLORE, DEVELOP, GROW, EXCEL</div>
      <p>You have received a new message from your website's contact form:</p>

      <table class="details-table">
        <tr>
          <td>Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Message:</td>
          <td><div class="message-box">${message}</div></td>
        </tr>
      </table>

      <button onclick="location.href='mailto:${email}'" class="reply-button">
        Reply to ${name}
      </button>
    </div>

    <p class="footer">
      This is an automated email sent from your website's contact form.
    </p>
  </body>
</html>
`;
