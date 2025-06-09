export const resumePrompts = {
  polishSection: (sectionText: string) => `
你是一名专业的简历优化助手。请优化以下简历段落，使其更精炼、有逻辑、有吸引力：

${sectionText}
`,

  generateFromJD: (jobDesc: string) => `
请根据以下职位描述，生成一段适合简历中“工作经历”模块的内容（控制在100字左右）：

职位描述：
${jobDesc}
`
}