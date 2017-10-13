export default function reducer(state={
  test: null,
  test_attempts: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_VIEW_TEST": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_VIEW_TEST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VIEW_TEST_FULFILLED": {
        console.log('Reducer')
        let testAttempts = []
        action.payload.test_attempts.forEach(function(test) {
          let newTest = [];
          test.forEach(function(question) {
            let newQuestion, newAnswers = [], newUserAnswers, correct = false, matches, textSplit
            
            switch (question.type){
              case "text_block":
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  data: question.long_data
                }
              break; 
              case "question_one":        
                question.answers.forEach(function(answer){
                  let answerData = JSON.parse(answer.data)
                  if(answer.student_answer) newUserAnswers = answerData.value
                  if(answerData.answer == 1 && answer.student_answer) correct = true;
                  newAnswers.push({id: answerData.value, label: answerData.value, value: answerData.value })
                })
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  data: question.data,
                  answers: newAnswers,
                  userAnswer: newUserAnswers,
                  correct: correct
                }
              break;
              case "question_many":
                correct = true
                question.answers.forEach(function(answer) {
                  let answerData = JSON.parse(answer.data)
                  if(answer.student_answer) newUserAnswers += ","+answerData.value
                  if(answerData.answer == 0 && answer.student_answer) correct = false
                  else if(answerData.answer == 1 && !answer.student_answer) correct = false
                  newAnswers.push({id: answerData.value, label: answerData.value, value: answerData.value })  
                }.bind(this));
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  data: question.data,
                  answers: newAnswers,
                  userAnswer: newUserAnswers,
                  correct: correct
                }
              break;
              case "question_open":
                let answerData = JSON.parse(question.data)
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  data: answerData.q,
                  userAnswer: question.answers[0].student_answer_data,
                  userPoints: Number(question.userPoints),
                  maxPoints: Number(answerData.p)
                }
              break;
              case "fill_in":
                const regexFillIn =  /<w:([^>]+?)>/ig
                while (matches = regexFillIn.exec(question.long_data)) {
                  let ans = matches[1].split("|")
                  newAnswers.push(ans);
                }
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  withList: question.data == "0" ? false : true,
                  data: question.long_data,
                  answers: newAnswers,
                  userAnswer: JSON.parse(question.answers[0].student_answer_data)
                }
              break;
              case "question_prefdef":
              const regexPredef =  /<w:([^>]+?)>/ig
                while (matches = regexPredef.exec(question.long_data)) {
                  let ans = matches[1].split("|")
                  newAnswers.push(ans);
                }
                newQuestion = {
                  id: question.id,
                  type: question.type,
                  data: question.long_data,
                  answers: newAnswers,
                  userAnswer: JSON.parse(question.answers[0].student_answer_data)
                }
              break;

              default:
                newQuestion = question
              break;
            }
            newTest.push(newQuestion)
          });
          testAttempts.push(newTest)
        });
        console.log('testAttempts', testAttempts)
        return {
          ...state,
          fetching: false,
          fetched: true,
          test: action.payload.test,
          test_attempts: testAttempts
        }
      }
    }
    return state
}
