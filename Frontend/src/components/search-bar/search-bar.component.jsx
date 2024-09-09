import { FaPlusCircle } from "react-icons/fa";

import './search-bar.component.css'

export default function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button><FaPlusCircle /></button>
    </form>
  )
}
