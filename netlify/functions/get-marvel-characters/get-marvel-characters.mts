// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// import axios from 'axios';
// import { Context } from "@netlify/functions";

// const handler = async function (event, context) {
//   const requestKey = event.headers['MARVEL_API_KEY'];
//   const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${requestKey}`;
//   try {
//     console.log(requestKey)
//     const response = await axios.get(url);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(response.data),
//     };
//   } catch (error) {
//     return {
//       statusCode: error.response ? error.response.status : 500, 
//       body: `${error.toString()} ${requestKey}` 
//     };
//   }
// };

// module.exports = { handler };


import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const requestKey = req.headers.get("MARVEL_API_KEY");
  const allValues = Netlify.env.toObject();
  const otherValue = process.env.MARVEL_API_KEY;
  const apiKey = Netlify.env.get("MARVEL_API_KEY");
  console.log(apiKey, requestKey, otherValue)
  console.log(allValues)

  if (requestKey === apiKey) {
    return new Response("Welcome!");
  }

  return new Response("Sorry, no access for you.", { status: 401 });
};
