// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Context } from '@netlify/functions';
import axios from 'axios';

export default async (req: Request, context: Context) => {
  const apiKey = Netlify.env.get('MARVEL_API_KEY');
  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`;
  const url2 ='https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=f3c16bcc557f4d4006b0806b54190952'

  try {
    await axios.get(url2).then((response) => {
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: error.response.status });
  }
};
