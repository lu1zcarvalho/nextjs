"use client"

import { useState, useEffect } from "react"

interface RepoProps {
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

export default function Repositorios() {
    const [repos, setRepos] = useState<RepoProps[]>([])

    useEffect(() => {
        function getData() {
            fetch("https:api.github.com/users/lu1zcarvalho/repos")
                .then(response => response.json())
                .then((data: RepoProps[]) => {

                    setTimeout( () => {
                        setRepos(data);
                    }, 2000)
                })
        }
        getData();
    }, [])

    return (
        <div>
            <h1>Pagina repositórios</h1>
            {repos.map((item) => (
                <div key={item.id}>
                    <strong>Repositorio: </strong><a>{item.name}</a>
                    <br /><br />
                </div>
            ))
            }
        </div>
    )
}