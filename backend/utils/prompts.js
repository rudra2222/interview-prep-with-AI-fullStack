function questionAnswerPrompt(role, experience, topicToFocus, numberOfQuestions) {
  return `
You are an expert technical interviewer.

Task:
Generate exactly ${numberOfQuestions} interview questions for a candidate applying as a "${role}" with ${experience} of experience.
Focus ONLY on the topic: "${topicToFocus}".

Requirements:
1. Output MUST be in strict JSON format — do not include any extra text or code fences.
2. The JSON must be an object with this structure:
[
  {
    "question": "string",
    "answer": "string"
  },
  ...
]
3. Each "question" should be concise but challenging, matching the candidate's experience level.
4. Each "answer" should be technically correct as well beginner-friendly.
5. No markdown, no comments — only the JSON object.
6. if needed then give small block of code.
7. give needed explanation.

Now generate the output.
`
}



function conceptExplanationPrompt(question) {
  return `
You are a friendly programming tutor for beginners.

Task:
Explain the following question in simple, beginner-friendly language:
"${question}"

Requirements:
1. Output MUST be in strict JSON format — no markdown, no extra text, no code fences.
2. The JSON must have exactly this structure:
{
  "title": "string",
  "explanation": "string"
}
3. "title" should be a short, clear headline summarizing the topic.
4. "explanation" should be easy to read, in depth, and use real-life analogies if helpful.
5. if explanation includes code then provide a small code block as an example.

Now generate the output.
`
}
module.exports = { questionAnswerPrompt, conceptExplanationPrompt };
