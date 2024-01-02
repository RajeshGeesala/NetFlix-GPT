import { openAiKey } from "../assets/consts";
import OpenAI from 'openai';
const openAi = new OpenAI(
    {
    apiKey : openAiKey ,
    dangerouslyAllowBrowser: true}

) 

export default openAi 