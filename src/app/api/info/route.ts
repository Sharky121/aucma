const nodemailer = require("nodemailer");

export async function POST(request: Request, response: Response) {
    const formData = await request.json();

    const { name = '', email = '', phone = '', comment ='' } = formData;

    let userMessage = '';

    const getField = (text: string, value: string) => {
        if (value !== '') {
            return `<p>${text}: ${value}</p>`
        }

        return '';
    }

    const mailMessage = `
        ${getField('Имя', name)} 
        ${getField('Email', email)} 
        ${getField('Телефон', phone)}
        ${getField('Комментарий', comment)}
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.WEB_MAILER_SMTP,
      port: process.env.WEB_MAILER_PORT,
      secure: true,
      auth: {
        user: process.env.WEB_MAILER,
        pass: process.env.WEB_MAILER_PASSWORD,
      },
    });

    const mailOptions = {
      to: process.env.WEB_MAILER_TO,
      from: process.env.WEB_MAILER_FROM,
      subject: 'Обратная связь с сайта www.aucma-rus.ru',
      html: mailMessage
    };

    try {
        await transporter.sendMail(mailOptions);
        userMessage = 'Отправлено';
    } catch (error) {
        userMessage = `${error}`;
    }

    return Response.json(userMessage);
}