

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit ({name, email})
    }
  return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <input type="text" required className="newsletter-input"  placeholder="insira seu nome..."/>
        <input type="email" className="newsletter-input" required placeholder="insira seu e-mail..."/>
        <button type="submit" className="newsletter-button">Seguir</button>
    </form>
  )
}

export default Form