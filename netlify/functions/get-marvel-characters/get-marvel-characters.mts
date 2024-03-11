import { Context } from '@netlify/functions';
import axios from 'axios';
import Crypto from 'crypto';

export default async (req: Request, context: Context) => {
  // Timestamp
  const ts = Math.floor(Date.now() / 1000).toString();

  // Keys
  const publicKey: string =
    Netlify.env.get('MARVEL_API_KEY') || 'no_public_key';
  const privateKey: string =
    Netlify.env.get('MARVEL_API_KEY_PRIVATE') || 'no_private_key';

  // Hash and encodings
  const hash = Crypto.createHash('md5');
  const combinedString: string = ts + privateKey + publicKey;
  const m_hash_str: string = hash.update(combinedString).digest('hex');

  // All request parameters
  const payload: { [key: string]: string } = {
    ts: ts,
    apikey: publicKey,
    hash: m_hash_str,
  };

  // Make request
  axios
    .get('https://gateway.marvel.com:443/v1/public/characters', {
      params: payload,
    })
    .then((response) => {
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      return error
    });
};
