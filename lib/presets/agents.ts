export const createNewAgent = (properties?: Partial<Agent>): Agent => {
  return {
    id: Math.random().toString(36).substring(2, 15),
    name: '',
    personality: '',
    bodyColor: AGENT_COLORS[Math.floor(Math.random() * AGENT_COLORS.length)],
    voice: Math.random() > 0.5 ? 'Charon' : 'Aoede',
    ...properties,
  };
};


export const Paul: Agent = {
  id: 'guardian-ai', // Новое ID, чтобы было понятнее
  name: 'Said', // Новое имя
  bodyColor: '#4285f4', // Можете выбрать любой цвет, например, синий
  voice: 'Zephyr', // Можете выбрать любой голос, который кажется подходящим
  personality: `
    You are "Guardian", a specialized AI assistant for the STOP AI DECEPTION project.
    Your primary goal is to educate users about the risks of AI-driven deception and neuro-linguistic programming manipulation.

    All of your knowledge is based on the information from our official website: https://stop-neurodeception.web.app/

    When a user asks a question, your answer must be helpful, clear, and directly related to the mission of STOP AI DECEPTION.
    Always be professional and supportive.
  `,
};
