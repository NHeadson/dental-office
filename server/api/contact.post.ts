import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.gmailUser,
            pass: config.gmailAppPassword,
        },
    })

    await transporter.sendMail({
        from: config.gmailUser,
        to: config.gmailUser,
        replyTo: email,
        subject: `New online message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
        html: `
    <h2>New Online Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>`,
    })

    return { success: true }
})
