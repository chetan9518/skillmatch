import { Link } from "react-router-dom"

type slide ={
  label :string,
  to :string,
  text: string
}
export function Slide({label,to,text}:slide){
return <div className="text-sm font-medium text-zinc-400 dark:text-zinc-200 pt-2">
          {label}{" "}
          <Link to={to} className="text-blue-700 hover:underline hover:text-blue-400 dark:text-blue-500">
            {text}
          </Link>
        </div>}