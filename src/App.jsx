// import axios from "axios";
// import React, { useEffect, useState, useRef } from "react";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const checkedInput = useRef([]);
//   const [lock, setLock] = useState(false);
// const[checkAnswer,setCheckAnswer]=useState(0)
//   const [questionState, setQuestionState] = useState(0);

//   const Data = () => {
//     axios("https://the-trivia-api.com/v2/questions")
//       .then((res) => {
//         console.log(res.data);
//         setQuestions(res.data);
//       })

//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   function nextQuestion(questionState) {
//     const checkedButton = checkedInput.current.find((input) => input.checked);
//     console.log(checkedButton);

//     if (checkedButton) {
//       const selectedValue = checkedButton.value;
//       console.log("Selected answer:", selectedValue);
//     }
//     questionState < questions.length - 1
//       ? setQuestionState(questionState + 1)
//       : alert("question khtm hogaye maalik");
//   }

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));

//       [array[i], array[j]] = [array[j], array[i]];
//     }

//     return array;
//   }
//   useEffect(() => {
//     Data();
//   }, []);
//   return (
//     <>
//       <h1>Quiz App</h1>

//       <br />
//       {questions.length > 0 ? (
//         <div className="container">
//           <h2>
//             {questionState + 1}:{questions[questionState].question.text}
//           </h2>

//           <ul>
//             {shuffleArray([
//               ...questions[questionState].incorrectAnswers,
//               questions[questionState].correctAnswer,
//             ]).map((item, index) => {
//               console.log(index);
//               console.log(item);

//               return (
//                 <li key={index}>
//                   <input
//                     type="radio"
//                     name="choice"
//                     id={item.id}
//                     value={item}
//                     // ref={(el) => (checkedInput.current[questionState] = el)}
//                   />
//                   {item}
//                 </li>
//               );
//             })}
//           </ul>
//           <button onClick={() => nextQuestion(questionState)}>
//             {" "}
//             Next {questions.length}
//           </button>
//           <p></p>
//         </div>
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </>
//   );
// };

// export default App;

// import axios from "axios";
// import React, { useEffect, useState, useRef } from "react";
// // import intoductionpage from "./intoductionpage";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [score, setScore] = useState(0);
//   const [selVal, setSelVal] = useState(null);
//   const [questionState, setQuestionState] = useState(0);
//   const [quizComplete, setQuizComplete] = useState(false);

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));

//       [array[i], array[j]] = [array[j], array[i]];
//     }

//     return array;
//   }

//   const checkedInput = useRef([]);

//   const fetchQuestions = () => {
//     axios("https://the-trivia-api.com/v2/questions")
//       .then((res) => {
//         console.log(res.data);
//         setQuestions(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleAnswerSelection = (event) => {
//     const value = event.target.value;
//     setUserAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       newAnswers[questionState] = value;
//       return newAnswers;
//     });
//   };

//   const nextQuestion = () => {
//     if (!selVal) {
//       alert("Please select an answer");
//       return;

//     } else {
//       const checkedButton = checkedInput.current.find((input) => input.checked);
//       if (checkedButton) {
//         const selectedValue = checkedButton.value;
//         console.log("Selected answer:", selectedValue);
//         handleAnswerSelection({ target: { value: selectedValue } });
//       }
//     }

//     if (questionState < questions.length - 1) {
//       setQuestionState(questionState + 1);
//     } else {
//       setQuizComplete(true);
//       calculateScore();
//     }
//   };

//   const calculateScore = () => {
//     let totalScore = 0;
//     questions.forEach((question, index) => {
//       if (userAnswers[index] === question.correctAnswer) {
//         totalScore += 1;
//       }
//     });
//     setScore(totalScore);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   if (quizComplete) {
//     return (
//       <div className="container">
//         <h1>Quiz Completed!</h1>
//         <p className="p">
//           Your Score: {score}/{questions.length}
//         </p>
//         <button onClick={() => window.location.reload()}>Play Again</button>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* <intoductionpage /> */}
//       <br />
//       {questions.length > 0 ? (
//         <div className="container">
//           <h1>Quiz App</h1>

//           <h2>
//             {questionState + 1}: {questions[questionState].question.text}
//           </h2>

//           <ul>
//             {shuffleArray([
//               ...questions[questionState].incorrectAnswers,
//               questions[questionState].correctAnswer,
//             ]).map((item, index) => (
//               <li key={index}>
//                 <input
//                   type="radio"
//                   name="choice"
//                   id={item}
//                   value={item}
//                   ref={(el) => (checkedInput.current[index] = el)}
//                 />
//                 {item}
//               </li>
//             ))}
//           </ul>
//           <button onClick={nextQuestion}>Next {questionState + 1}</button>
//           <p></p>
//         </div>
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </>
//   );
// };

// export default App;

import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [questionState, setQuestionState] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const checkedInput = useRef([]);

  const fetchQuestions = () => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAnswerSelection = (event) => {
    const value = event.target.value;
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionState] = value;
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    const checkedButton = checkedInput.current.find((input) => input.checked);
    if (checkedButton) {
      const selectedValue = checkedButton.value;
      console.log("Selected answer:", selectedValue);
      handleAnswerSelection({ target: { value: selectedValue } });

      if (questionState < questions.length - 1) {
        setQuestionState(questionState + 1);
      } else {
        setQuizComplete(true);
        calculateScore();
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (quizComplete) {
    return (
      <div className="container">
        <h1>Quiz Completed!</h1>
        <p className="p">
          Your Score: {score}/{questions.length}
        </p>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  return (
    <>
      <br />
      {questions.length > 0 ? (
        <div className="container">
          <h1>Quiz App</h1>
          <h2>
            Q{questionState + 1}: {questions[questionState].question.text}
          </h2>

          <ul>
            {shuffleArray([
              ...questions[questionState].incorrectAnswers,
              questions[questionState].correctAnswer,
            ]).map((item, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="choice"
                  id={item}
                  value={item}
                  ref={(el) => (checkedInput.current[index] = el)}
                />
                {item}
              </li>
            ))}
          </ul>
          <button onClick={nextQuestion}>Next {}</button>
          <p></p>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default App;
