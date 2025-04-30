import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const initialQuestions = [
  { id: 1, prompt: "lorem testum 1", answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], correctIndex: 0 },
  { id: 2, prompt: "lorem testum 2", answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], correctIndex: 1 },
];

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(initialQuestions);

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { id: prevQuestions.length + 1, ...newQuestion, answers: [newQuestion.answer1, newQuestion.answer2, newQuestion.answer3, newQuestion.answer4] },
    ]);
    setPage("List");
  };

  const deleteQuestion = (id) => {
    setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== id));
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={addQuestion} />
      ) : (
        <QuestionList questions={questions} onDeleteQuestion={deleteQuestion} />
      )}
    </main>
  );
}

export default App;