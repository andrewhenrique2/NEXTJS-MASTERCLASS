"use client"
import { IconTrash } from "@tabler/icons-react"
import { useState } from "react"


export default function Primeiro( ) {

    const [tarefas, setTarefas] = useState<string[]>([])
    const [nome, setNome] = useState<string>('')

   function adicionarTarefa() {
    if (nome) {
    setTarefas([...tarefas, nome])
    setNome('')
    }
   }

   function deleteTarefa(i: number) {
    setTarefas(tarefas.filter((_, index) => index !== i))
}

    return (

        <div>
            <div className="flex flex-col p-4">
                <label htmlFor="tarefa">Tarefa</label>
                <div className="flex gap-2">
                <input
                    type="text"
                    id="tarefa"
                    value={nome}  
                    onChange={(e) => setNome(e.target.value)}
                    className="bg-slate-700 px-4 py-2 rounded-md outline-none text-xl w-2/3"/>
                    <button onClick={adicionarTarefa}  className="bg-zinc-500 px-4 py-2 rounded-md w-1/4" >Adicionar</button>
                    </div>
            </div>

            <div className="p-4">
                <ul className="flex flex-col gap-2">
                    {tarefas.map((tarefa, i) => {
                        return (
                            <li 
                            className="bg-slate-700 gap-2 flex px-4 py-4" 
                            key={i}>
                            <span className="flex-grow">{tarefa}</span>
                            <IconTrash
                            onClick={() => deleteTarefa(i)}
                            size={18}
                            className="cursor-pointer text-red-500" 
                            />
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}