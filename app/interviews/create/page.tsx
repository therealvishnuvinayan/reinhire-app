'use client';

import React from 'react';
import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  experienceLevels,
  industries,
  jobTitles,
  keySkills,
} from '@/app/content';

const CreateInterview = () => {
  type Inputs = {
    industry: string;
    job: string;
    experienceLevel: string;
    keySkills: string[];
    jobDescription: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('##data', data);
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-6">Create Interview</h1>
        <div className="flex gap-4 flex-wrap">
          <Autocomplete
            className="max-w-xs border border-gray-200 rounded-lg"
            label="Select an industry"
            onInputChange={(value: string) => setValue('industry', value)}
          >
            {industries.map((industry) => (
              <AutocompleteItem key={industry.key} value={industry.key}>
                {industry.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          <Autocomplete
            className="max-w-xs border border-gray-200 rounded-lg"
            label="Select an job title"
            onInputChange={(value: string) => setValue('job', value)}
          >
            {jobTitles.map((job) => (
              <AutocompleteItem
                key={job.key}
                value={job.key}
                {...register('job')}
              >
                {job.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Autocomplete
            className="max-w-xs border border-gray-200 rounded-lg"
            label="Select experience level"
            onInputChange={(value: string) =>
              setValue('experienceLevel', value)
            }
          >
            {experienceLevels.map((level) => (
              <AutocompleteItem key={level.key} value={level.key}>
                {level.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Select
            className="max-w-xs border border-gray-200 rounded-lg"
            label="Key skills"
            placeholder="Select key skills"
            selectionMode="multiple"
            onSelectionChange={(keys) => {
              if (keys !== 'all') {
                const selectedSkills = Array.from(keys) as string[];

                setValue('keySkills', selectedSkills);
              }
            }}
          >
            {keySkills.map((skill) => (
              <SelectItem key={skill.key} {...register('keySkills')}>
                {skill.label}
              </SelectItem>
            ))}
          </Select>

          <Textarea
            className="max-w-lg max-h-lg border border-gray-200 rounded-lg"
            label="Job Description"
            minRows={15}
            placeholder="Enter your job description here"
            onChange={(e) => setValue('jobDescription', e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button color="secondary" type="submit">
            Create Interview
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateInterview;
