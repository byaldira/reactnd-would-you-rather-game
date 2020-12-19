export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER= 'ADD_ANSWER'
export const GET_QUESTIONS = 'GET_QUESTIONS'

export function addQuestion(soru) {
    return {
        type :  ADD_QUESTION,
        soru
    }
}

export function addAnswer(soruId,cevapId,authedUser) {
    return {
        type : ADD_ANSWER,
        soruId,
        cevapId,
        authedUser
    }
}

export function getQuestions(sorular) {
    return {
        type : GET_QUESTIONS,
        sorular
    }
}