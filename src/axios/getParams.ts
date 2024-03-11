import crypto from 'crypto-browserify';

export const getParams = () => {
  const ts = Math.floor(Date.now() / 1000).toString();

  // Keys
  const publicKey = 'f3c16bcc557f4d4006b0806b54190952';
  const privateKey = '9425a8b5e9e6d4ef1687f46de67fa943f89daa34';

  // Hash and encodings
  const hash = crypto.createHash('md5');
  const combinedString = ts + privateKey + publicKey;
  const m_hash_str = hash.update(combinedString).digest('hex');

  // All request parameters
  const payload = {
    ts: ts,
    apikey: publicKey,
    hash: m_hash_str,
  };
  return payload;
};
