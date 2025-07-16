 type input ={
onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
label:string,
placeholder:string,
type:string
 }
 export function Input({onChange,label,placeholder,type}:input)
 {return <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
          <input
            type={type}
            onChange={onChange}
            id= {label}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder={placeholder}
            required
          />
        </div>}