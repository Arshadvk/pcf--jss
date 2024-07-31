import admin from 'firebase-admin';
import { Storage } from '@google-cloud/storage';
import serviceAccount from '../../src/serviceAccountKey';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://pcf-ae.appspot.com',
  });
}

const bucket = admin.storage().bucket();

export { bucket };
