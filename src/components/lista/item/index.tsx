import style from '../Lista.module.scss';
import { ITarefa } from '../../../types/tarefa';

interface Props extends ITarefa{
  selecionaTarefa:(tarefaSelecionada: ITarefa) => void
}

export default function item(
  {tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa}:Props){
  console.log('Item atual: ')
  return(
    <li
     className={style.item}
      onClick={() => selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
    )}
    >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}