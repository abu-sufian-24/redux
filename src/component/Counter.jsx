


function Counter({ value, onIncrement, onDecrement }) {
  // const [count, setCount] = useState(0)

  // const handleIncrement = () => {

  //   setCount(prev => prev + 1)
  // };
  // const handleDecrement = () => {
  //   if (count === 0) {
  //     return;
  //   } else {
  //     setCount(prev => prev - 1)
  //   }

  // }
  return (
    <div className="max-w-[400px] mx-auto border p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Count: {value}</h1>
      <div>
        <button onClick={() => onIncrement()} className="bg-green-600 text-white py-2 px-4 font-bold">Increment</button>
        <button onClick={() => onDecrement()} className="bg-red-600 text-white py-2 px-4 font-bold">Decrement</button>
      </div>
    </div>
  )
}

export default Counter