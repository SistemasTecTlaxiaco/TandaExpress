import React from "react";
interface InviteCardProps {
  email: string;
  userName?: string;
}
const InviteCard: React.FC<InviteCardProps> = ({ email, userName = "un amigo" }) => {
  const link = `https://juntacripto.xyz/junta/julio?ref=${email}`;
  const text = encodeURIComponent(
    `📢 ¡Hola! ${userName} te invita a una tanda de $10/semana en blockchain.\n\n💼 Todo es transparente y con reputación digital.\n✅ Puedes ver tu historial y cumplir tus aportes desde el celular.\n\nÚnete aquí 👇\n${link}`
  );
  const whatsappUrl = `https://wa.me/?text=${text}`;
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 16 }}>
      <h3>📲 Invita a tus amigos</h3>
      <p>Comparte esta tanda por WhatsApp y ahorren juntos.</p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        📤 Invitar por WhatsApp
      </a>
    </div>
  );
};
export default InviteCard;