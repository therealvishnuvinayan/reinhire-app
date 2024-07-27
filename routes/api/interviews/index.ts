import axios from 'axios';

interface createInterviewProps {
  industry: string;
  job: string;
  experienceLevel: string;
  keySkills: string[];
  jobDescription: string;
}

const createInterview = async (data: createInterviewProps) => {
  const { industry, job, experienceLevel, keySkills, jobDescription } = data;

  console.log('##data', data);

  try {
    const response = await axios.post('/api/interview/create', {
      industry,
      job,
      experienceLevel,
      keySkills,
      jobDescription,
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      return {
        error: error.response.data.message,
      };
    } else {
      console.error(error);

      return {
        error: 'Internal server error',
      };
    }
  }
};

export default createInterview;
