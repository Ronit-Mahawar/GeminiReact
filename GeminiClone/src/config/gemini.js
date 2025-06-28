// // const apiKey="AIzaSyC0lU3e6p_yudS7ZDIQuhGqFox5BHw7W9c";

// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main(prompt) {
//   const ai = new GoogleGenAI({
//     apiKey: 
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// export default main;
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyArBQLg2SEdbuO2la8tsYFdsJ0nwyrTtBA",
// });

// async function main(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: prompt,
//     config: {
//       maxOutputTokens: 500,
//       temperature: 0.1,
//     },
//   });
//   console.log(response.text);
// }
// export default main
