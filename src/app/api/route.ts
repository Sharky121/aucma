// var postmark = require("postmark");
const nodemailer = require("nodemailer");

export async function POST(request: Request, response: Response) {
    const formData = await request.json();

    const { name, email, message } = formData;

    let userMessage = '';

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

    const mailOptions = {
      to: 'Sharky121@mail.ru',
      from: 'sender@www.aucma-rus.ru',
      subject: 'New contact form submission',
      message: 'test sdfdsf',
      TextBody: 'test sdfdsf'
    };

    try {
        await transporter.sendMail(mailOptions);
        userMessage = 'Отправлено';
    } catch (error) {
        userMessage = `${error}`;
    }

  // Send an email:
    // const client = new postmark.ServerClient("97a9265c-a1b9-4930-876e-c50a4279686f");
    

    // const emailDetails = {
    //   to: 'Sharky121@mail.ru',
    //   from: 'sender@www.aucma-rus.ru',
    //   subject: 'New contact form submission',
    //   message: 'test sdfdsf',
    //   TextBody: 'test sdfdsf'
    // };



    return Response.json(userMessage);
  }