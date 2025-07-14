import React, { useRef } from "react";
import QRCode from "qrcode.react";
interface QRCodeInviteProps {
  email: string;
}
const QRCodeInvite: React.FC<QRCodeInviteProps> = ({ email }) => {
  const link = `https://juntacripto.xyz/junta/julio?ref=${email}`;
  const canvasRef = useRef(null);
  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "TandaExpress-QR.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h3>📷 Escanea o comparte este QR</h3>
      <QRCode value={link} size={200} level="H" includeMargin renderAs="canvas" ref={canvasRef} />
      <p>{link}</p>
      <button onClick={downloadQRCode}>⬇️ Descargar QR</button>
    </div>
  );
};
export default QRCodeInvite;