// var postmark = require("postmark");
const nodemailer = require("nodemailer");

export async function POST(request: Request, response: Response) {
    const formData = await request.json();

    const { name, email, message } = formData;

    // Конфигурация для Postmark
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.postmarkapp.com',
    //   port: 587,
    //   secure: false, 
    //   auth: {
    //     user: '97a9265c-a1b9-4930-876e-c50a4279686f', 
    //     pass: '97a9265c-a1b9-4930-876e-c50a4279686f'
    //   }
    // });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "loginov.dmitry86@gmail.com",
        pass: "GvnSdWjQ9771488",
      },
    });


    // Отправляем письмо
    // const mailOptions = {
    //   from: 'Ваше Имя <noreply@aucma-rus.ru>', // "Отправитель" - используйте свой собственный домен
    //   to: 'Sharky121@mail.ru', // Получатель
    //   subject: 'Новое сообщение из формы обратной связи',
    //   text: 'test'
    // };

    // try {
    //     await transporter.sendMail(mailOptions);
    // } catch (error) {
    //     console.error(error);
    // }

// Require:


  // Send an email:
    // const client = new postmark.ServerClient("97a9265c-a1b9-4930-876e-c50a4279686f");
    let userMessage = '';

    // client.sendEmail({
    //   "From": "sender@www.aucma-rus.ru",
    //   "To": "Sharky121@mail.ru",
    //   "Subject": "Test",
    //   "TextBody": "Hello from Postmark!"
    // });

    // const emailDetails = {
    //   to: 'Sharky121@mail.ru',
    //   from: 'sender@www.aucma-rus.ru',
    //   subject: 'New contact form submission',
    //   message: 'test sdfdsf',
    //   TextBody: 'test sdfdsf'
    // };

    const mailOptions = {
      to: 'Sharky121@mail.ru',
      from: 'sender@www.aucma-rus.ru',
      subject: '👋 Hello from Node.js 🚀',
      text: 'This is a test email sent from Node.js using nodemailer. 📧💻'
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error: { message: any; }, info: { response: any; }) => {
      if (error) {
        console.error('❌ Error:', error.message);
      } else {
        console.log('✅ Email sent:', info.response);
      }
    });

    // try {
    //   await client.sendEmail(emailDetails);
    //   userMessage = 'Email sent successfully!';
    // } catch (error) {
    //   userMessage =`Error sending email: ${error}`;
    // }

    return Response.json(userMessage);
  }