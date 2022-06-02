import { apiEndpoint } from './api';

async function getCharacter(...ids) {
  const response = await fetch(`${apiEndpoint}/character/${ids.join(',')}`);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
}

export { getCharacter };
