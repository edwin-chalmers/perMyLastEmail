export const getResponse = async (messages) => {
    console.log(process.env)

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          "model": "gpt-4",
          "messages": messages,
          "max_tokens": 500,
          "top_p": 1,
          "temperature": 1
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return null;
    }
  };