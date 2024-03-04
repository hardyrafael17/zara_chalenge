// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Context } from '@netlify/functions';
import axios from 'axios';
import Crypto from 'crypto';

export default async (req: Request, context: Context) => {

  function generateMD5(timestamp, privateKey, publicKey) {
    const input = `${timestamp}${privateKey}${publicKey}`;
    return Crypto.createHash('md5').update(input).digest('hex');
  }

  function getTimestamp() {
    return new Date().getTime();
  }

  const apiKey = Netlify.env.get('MARVEL_API_KEY');
  const timeStamp = getTimestamp();
  const hash = generateMD5(timeStamp, Netlify.env.get('MARVEL_KEY_PRIVATE'), apiKey);
  console.log('hash', hash);
  console.log('apiKey', apiKey);
  console.log('timeStamp', timeStamp);
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`;
  console.log(url)
  try {
    await axios.get(url).then((response) => {
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    });
  } catch (error) {
    return new Response('Error', { status: error.response.status });
  }
};
