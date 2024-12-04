
import Counter from "./component/Counter"
import TotalCount from "./component/TotalCount"
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./features/counters/CounterSlice";


function App() {
  // const initialCounters = [
  //   {
  //     id: 1,
  //     value: 0,
  //   },
  //   {
  //     id: 2,
  //     value: 0,
  //   },
  //   {
  //     id: 3,
  //     value: 0,
  //   },
  // ]
  // const [counters, setCounters] = useState(initialCounters);
  // const totalCounterValue = counters.reduce((sum, item) => {
  //   return sum + item.value
  // }, 0);

  // const handleIncrement = (id) => {
  //   const updateCounters = counters.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         value: item.value + 1
  //       }
  //     } else {
  //       return item
  //     }
  //   });
  //   setCounters(updateCounters)
  // };

  // const handleDecremen = (id) => {
  //   const updateCounters = counters.map((item) => {
  //     if (item.id === id && item.value > 0) {
  //       return {
  //         ...item,
  //         value: item.value - 1
  //       }
  //     } else {
  //       return item
  //     }
  //   });
  //   setCounters(updateCounters)
  // }

  // redux hear ===========================;

  const counters = useSelector((store) => store.counters);
  const dispatch = useDispatch()
  const totalCounterValue = counters.reduce((sum, item) => {
    return sum + item.value
  }, 0);

  const handleIncrement = (id) => {
    dispatch(Increment(id))
  }
  const handleDecremen = (id) => {
    dispatch(Decrement(id))
  }

  return (
    <>
      {counters.map((count) =>
        <Counter key={count.id}
          value={count.value}
          onIncrement={() => handleIncrement(count.id)}
          onDecrement={() => handleDecremen(count.id)}
        />)}


      <TotalCount totalCount={totalCounterValue} />
    </>
  )
}

export default App
