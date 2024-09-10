import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const appAdmin = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        type: "service_account",
        project_id: "alkolor-c3bdf",
        private_key_id: "670f29449a2c10342f07fa70bcfd2085a67022e8",

        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: "102299308709643286939",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-talmk%40alkolor-c3bdf.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
      }),
    })
  : admin.app();

const dbAdmin = getFirestore();
const AuthAdmin = getAuth(appAdmin);
const timeAdmin = admin.firestore.FieldValue.serverTimestamp();

export { dbAdmin, AuthAdmin, timeAdmin };
