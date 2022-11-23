// <QuestionComponent question={"is that true?"}  omclickyes={setIsthatTrue('yes')}  onclickno={setisthattrue('no')}  />

// <QuestionComponent question={"are you fine?"}  omclickyes={setAreyoufine('yes')}  onclickno={setAreyoufine('no')}  />

// <div>
// <p>{question}</p>
// <button onclick={onclickyes} />
// </button onclick={onclickno} />
// </div>

// import React from "react";

// export default function QuestionComponent(props) {
//   return (
//     <div style={{ marginVertical: 100 }}>
//       {props.question}

//       <button
//         style={{
//           backgroundColor: props.value == "yes" ? "red" : "white",
//           margin: 30,
//         }}

//         onClick={props.onYesClick}
//       >
//         yes
//       </button>

//       <button
//         style={{ backgroundColor: props.value == "no" ? "red" : "white" }}

//         onClick={props.onNoClick}
//       >
//         no
//       </button>
//     </div>
//   );
// }
