import { callMoonshot } from '@flow-pilot/core-ai'
import { resumePrompts } from '@flow-pilot/core-prompts'

export async function polishResumeSection(section: string) {
  const prompt = resumePrompts.polishSection(section)
  return await callMoonshot({ prompt })
}

export async function generateResumeFromJD(jd: string) {
  const prompt = resumePrompts.generateFromJD(jd)
  return await callMoonshot({ prompt })
}
