const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.umbler.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Método não permitido" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Body inválido" }) };
  }

  const { tipo, nome, sobrenome, email, telefone, empresa, cargo, site, mensagem, solicitacoes } = body;

  if (!nome || !email) {
    return { statusCode: 400, body: JSON.stringify({ error: "Nome e e-mail são obrigatórios" }) };
  }

  const assunto =
    tipo === "privacidade"
      ? `[MDS Cloud] Nova solicitação LGPD — ${nome}`
      : `[MDS Cloud] Novo contato via site — ${nome}`;

  const linhas = [
    ["Nome", sobrenome ? `${nome} ${sobrenome}` : nome],
    ["E-mail", email],
    telefone && ["Telefone", telefone],
    empresa && ["Empresa", empresa],
    cargo && ["Cargo", cargo],
    site && ["Site", site],
    solicitacoes && ["Solicitações", solicitacoes],
    mensagem && ["Mensagem", mensagem],
  ]
    .filter(Boolean)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 8px;color:#888;white-space:nowrap;">${k}</td><td style="padding:4px 8px;">${v}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0ea5e9;">${assunto}</h2>
      <table style="border-collapse:collapse;width:100%;">${linhas}</table>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Site MDS Cloud" <${process.env.SMTP_USER}>`,
      to: tipo === "privacidade" ? "privacidade@mdscloud.com.br" : "rodrigo@97sites.com.br",
      replyTo: email,
      subject: assunto,
      html,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: "Falha no envio do e-mail" }) };
  }
};
