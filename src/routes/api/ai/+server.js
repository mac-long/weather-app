import { OPEN_AI_API_KEY } from '$env/static/private'

export async function GET({ url }) {
  const type = url.searchParams.get('type')
  const temperature = url.searchParams.get('temperature')
  const unit = url.searchParams.get('unit')
  const location = url.searchParams.get('location')

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPEN_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Satirically explain how to prepare for ${type} weather at ${temperature} degrees ${unit} in ${location} in under 40 characters`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
  }).then((res) => res.json())

  return new Response(JSON.stringify(response.choices[0].text))
}