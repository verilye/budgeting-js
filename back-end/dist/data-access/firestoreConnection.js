"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
initializeApp({
    credential: applicationDefault()
});
const db = getFirestore();
