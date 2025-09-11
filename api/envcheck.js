// GET https://<你的域名>/api/envcheck
module.exports = (req, res) => {
  const cid = process.env.OAUTH_CLIENT_ID || "";
  res.status(200).json({
    origin: process.env.ORIGIN || null,
    complete_url: process.env.COMPLETE_URL || null,
    client_id_preview: cid ? `${cid.slice(0,4)}…${cid.slice(-4)}` : null
  });
};
