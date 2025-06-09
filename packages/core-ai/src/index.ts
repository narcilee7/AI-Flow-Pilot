import axios from 'axios'

export async function callMoonshot({
  prompt,
  temperature = 0.7,
  model = 'moonshot-v1-8k',
}) {
  const apiKey = process.env.MOONSHOT_API_KEY
  const url = 'https://api.moonshot.cn/v1/chat/completions'

  const response = await axios.post(url, {
    model,
    messages: [{ role: 'user', content: prompt }],
    temperature,
  }, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    }
  })

  return response.data.choices[0].message.content
}
