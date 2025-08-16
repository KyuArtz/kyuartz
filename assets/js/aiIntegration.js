export async function fetchAIResponse(prompt) {
  const response = await fetch('http://localhost:3001/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  if (response.status === 429) {
    return "Sorry, I'm getting too many requests right now. Please try again in a moment.";
  }
  const data = await response.json();
  return data.response || "Sorry, I couldn't get a response.";
}