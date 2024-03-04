// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Context } from '@netlify/functions';
import axios from 'axios';

export default async (req: Request, context: Context) => {
  const apiKey = Netlify.env.get('MARVEL_API_KEY');
  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`;
  try {
    await axios.get(url).then((response) => {
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
