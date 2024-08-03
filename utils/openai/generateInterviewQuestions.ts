import OpenAI from 'openai';
interface createInterviewProps {
  industry: string;
  job: string;
  experienceLevel: string;
  keySkills: string[];
  jobDescription: string;
}

const generateInterviewQuestions = async (data: createInterviewProps) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return { error: 'OpenAI API key not found' };
  }
  const openai = new OpenAI({ apiKey });

  const { industry, job, experienceLevel, keySkills, jobDescription } = data;

  const prompt = `Create a list of interview questions for the following job position:
  Industry: ${industry}
  Job Title: ${job}
  Experience Level: ${experienceLevel}
  Key Skills: ${keySkills.join(', ')}
  Job Description: ${jobDescription}`;

  const openaiCompletionApiUrl = 'https://api.openai.com/v1/completions';
  const openaiCompletionApiPayload = {
    model: 'davinci-002',
    prompt,
    max_tokens: 500,
    n: 1,
    stop: null,
    temperature: 0.7,
  };

  try {
    console.log('##try')
    const response = await openai.completions.create(
      openaiCompletionApiPayload,
    );
    console.log('##response', response);
    const interviewQuestions = response.choices[0].text.trim();

    return interviewQuestions;
  } catch (error) {
    return { error: 'Internal server error' };
  }
};

export default generateInterviewQuestions;
