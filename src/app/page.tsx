import { OwnerRepo } from "@/components/OwnerRepo"; 
interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url);
  return response.json();
}

async function getData() {
  const data = await delayFetch("https:api.github.com/users/lu1zcarvalho/repos", 1500)
  return data;
}

export default async function Home() {

  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página home</span>

      <h3>Meus repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong><a>{item.name}</a>
          <br />
          <OwnerRepo 
           avatar_url={item.owner.avatar_url}
           name={item.owner.login}
          />
          
          <br />
        </div>
      ))
      }
    </main >
  );
}
