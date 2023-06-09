export default async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/marcinwojtczak/repos');

  if (!response.ok) throw new Error('field to fetch data')
  
  const repos = await response.json();
  return repos;
}