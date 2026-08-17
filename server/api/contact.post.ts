import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    if (name.length > 100) {
        throw createError({ statusCode: 400, statusMessage: 'Name is too long (100 character max)' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email) || email.length > 254) {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address' })
    }

    if (message.length > 750) {
        throw createError({ statusCode: 400, statusMessage: 'Message is too long (750 character max)' })
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
