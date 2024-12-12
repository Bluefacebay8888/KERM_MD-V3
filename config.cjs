// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dNMkdTdS9SRlA5RndUdGpwSGFOeC84RTYxT3RJQ2F3cHA2MXRtcDUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTAyWGdZZ1dQTEcwUUNFd0tEQjExU3FQc2NyMEZwUWFtTGJrUjM2aCt4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSkpqME5VWVF5aldCZVZWVEhBK0ZTdFpSblZ1Nzd3YjRxNzM0aElualdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSk8wMFdycmE0eFBTVURZV1lPUGt5QmY2RVNJV2p0cS9DWHEzdVZEbzFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPL2NXRVlhdXNtdDRzU28rM3VldkkrREltUTNDRjFiRFB4Tk45RlpYME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp0eGlkUGdaVmFiSVNNbkR1U1hnZkxEQTd2ejVQaUFSamFkS3pXaFRteUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VBWTlCSlVZOXlJTzYweUc0R3JMc2JCekNLVlgyNFdibWNibkE1RGsxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek12MElQSWdNV25Hd25qV1BuejdIOTZVMmpaZzd5UlVkWjVvL0NURUVRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN0ZEs4TTF3L1l0YU9wY3crUllFNlRWNlJvWU13QWRCenh3MUhCZkV3THNVRWs0d0FxYkdDRXNINmtWR25vZHVvNURBY1JtalFaYzlqME1BQkdrM2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJpTE5LN0JPcG5pOGVZbXRxdGhaZzhZOGxGZ0tGQ2k3YVg1b0tLVFlqaEs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpVm15WFpaU1RDQ19uQ29TY01lUnVnIiwicGhvbmVJZCI6IjY4NjRmOGEzLTc1ZWYtNGRlYy1hMjgzLThjYWRiOWE1YTMyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiV1Q4cFZOSlFUTGs2T3RHZFkwMWcxdHQ0YW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkpvOXVteDdZeWFjdm8yWk9jTnh4RDc5b0JBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhIWUExUTJZIiwibWUiOnsiaWQiOiIyMzM1OTQ2NDY1Mzg6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDVzZhQUdFUG5FNjdvR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRLQWQ5R0pQa0R1UEZ1akx2UGo0c0o5bkFuOTduVnoyTUdqeUEwL1ZZazg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdycGpVWkZnTHZxams2THZOL2FoMmVtSG1TVmhaU1IvWmFhK3k2SnFXZGc0VDBqcmhURzM2ZkFkakJ6bkpaTTRtSFpCb0h0eC9IeDN5MVMzVFJ3RkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJucE45OGRmbXlaNkdrZDBSU3c3Z1B5OFdubml1MUtqc01nOVNDQVZPellucEd0MTBiUzRZbUhXRzhLbFNLdWdEVnZnMTQwaUhFN1d1cm81K291NjdpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NDY0NjUzODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlQ2dIZlJpVDVBN2p4Ym95N3o0K0xDZlp3Si9lNTFjOWpCbzhnTlAxV0pQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MDA5NDc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZvMCJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "237659535227",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
