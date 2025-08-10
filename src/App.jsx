// import { useState } from "react";
import Rating from "./components/Rating";

// const Counter = () => {
//   // const [count, setCount] = useState(() => {
//   //   console.log('Init count state...');
//   //   return 0;
//   // });

  

//   return (
//     <>
//       <button onClick={() => 
//       setCount((prevCount) => {
//         console.log(prevCount)
//         return prevCount + 1
//       })}>Increment</button>
//     </>
//   )
// }

const App = () => {
  return (
    <>
      <Rating/>
      {/* <Counter/> */}
    </>
  )
}

export default App