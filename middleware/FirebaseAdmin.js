// firebaseAdmin.js
import admin from "firebase-admin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import dotenv from "dotenv";
dotenv.config();
// ✅ Update path below to match the actual filename
//const serviceAccount = require("./sachin.json");
const serviceAccount = {
  "type": process.env.TYPE,
  "project_id":process.env.PROJECT_ID,
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_id": process.env.CLIENT_ID,
  "client_email": process.env.CLIENT_EMAIL,
  "auth_uri": process.env.AUTH_URI,
  "toke_uri": process.env.TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
  "universe_domain": process.env.UNIVERSE_DOMAIN
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;