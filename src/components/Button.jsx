const Button = ({id, text, action}) => {
  const handleAction = (e) => {
    action(e);
  }

  return (
    <div>
      <button onClick={handleAction} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded text-xl px-16 py-2">{text}</button>
    </div>
  )
}

export default Button
