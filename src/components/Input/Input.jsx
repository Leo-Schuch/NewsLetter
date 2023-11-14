const Input = props => {
  return (
    <input className="outline-none py-1 px-5 w-full max-w-md dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-newsletter-200 focus:dark:border-newsletter-100 focus:invalid:border-2 focus:invalid:border-red-600 focus:invalid:dark:border-red-600" {...props}/>
  )
}

export default Input