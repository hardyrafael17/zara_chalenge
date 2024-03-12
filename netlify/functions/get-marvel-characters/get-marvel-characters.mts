import { Context } from '@netlify/functions';
import axios, { ResponseType } from 'axios';
import Crypto from 'crypto';

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const endPoint = url.searchParams.get('endPoint');
  let comicUrl = url.searchParams.get('comicUrl');
  url.searchParams.delete('endPoint');
  const urlSearchParams = url.searchParams.toString();

  // Timestamp
  const ts = Math.floor(Date.now() / 1000).toString();

  // Keys
  const publicKey: string | undefined = Netlify.env.get('MARVEL_API_KEY');
  const privateKey: string | undefined = Netlify.env.get(
    'MARVEL_API_KEY_PRIVATE'
  );

  if (!publicKey || !privateKey) {
    return Response.json(
      { error: 'No public or private key found' },
      { status: 500 }
    );
  }

  // Hash and encodings neeeded by MARVEL API
  const hash = Crypto.createHash('md5');
  const combinedString: string = ts + privateKey + publicKey;
  const m_hash_str: string = hash.update(combinedString).digest('hex');

  // All request parameters
  const payload: { [key: string]: string } = {
    ts: ts,
    apikey: publicKey,
    hash: m_hash_str,
  };
  const queryParams = new URLSearchParams(payload).toString();

  if (comicUrl && endPoint === 'comic') {
    try {
      const response = await fetch(`${comicUrl}?${queryParams}`);
      const data = await response.json();
      return Response.json({ data });
    } catch (error) {
      console.log(error);
      return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
  }

  const API_ENDPOINT = `https://gateway.marvel.com:443/v1/public/${endPoint}`;
  try {
    const response = await fetch(
      `${API_ENDPOINT}?${urlSearchParams}&${queryParams}`
    );
    const data = await response.json();
    console.log(data)
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Failed fetching data' }, { status: 500 });
  }
};
