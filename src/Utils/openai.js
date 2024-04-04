import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: null, // This is the default and can be omitted
    dangerouslyAllowBrowser: true // Set this option to true to allow running in a browser-like environment

  });

  export default openai