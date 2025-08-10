// import { useState } from "react";
import Rating from "./components/Rating";


const App = () => {
  return (
    <>
      <Rating 
      heading="How do you feel about react?"
      feedbackMessages={[
        'Hate it',
        'Dislike it',
        'Meh',
        'Like it',
        'Love it'
      ]}
      />
    </>
  )
}

export default App