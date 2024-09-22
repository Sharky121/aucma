var postmark = require("postmark");

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

  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.mail.ru',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //         user: 'loginov@cherryline.ru',
  //         pass: 'k6vwcT5b3QiddxcRMjbT',
  //     },
  // });


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
    var client = new postmark.ServerClient("97a9265c-a1b9-4930-876e-c50a4279686f");

    client.sendEmail({
      "From": "sender@www.aucma-rus.ru",
      "To": "Sharky121@mail.ru",
      "Subject": "Test",
      "TextBody": "Hello from Postmark!"
    });

    return Response.json('Ответ с сервера');
  }