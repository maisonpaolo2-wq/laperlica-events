import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, phone, date, guests, message } = await req.json()
  if (!name || !email) return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  try {
    await resend.emails.send({
      from: 'La Perlica Events Web <noreply@laperlicaevents.com>',
      to: ['hola@laperlicaevents.com'],
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone || '-'}\nFecha: ${date || '-'}\nInvitados: ${guests || '-'}\n\n${message || ''}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
