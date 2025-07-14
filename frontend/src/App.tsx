/**
 * Tanda Express Frontend (Codespace Edition)
 * See README for full feature list.
 */
import React from "react";
import InviteCard from "./components/InviteCard";
import QRCodeInvite from "./components/QRCodeInvite";

function App() {
  const user = { email: "demo@user.com", displayName: "Demo User" };
  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenido a Tanda Express</h1>
      <InviteCard email={user.email} userName={user.displayName} />
      <QRCodeInvite email={user.email} />
    </div>
  );
}

export default App;