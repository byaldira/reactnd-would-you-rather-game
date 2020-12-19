export const GET_ALL_USERS = 'GET_ALL_USERS'
export const ANSWER_TO_QUESTION = 'ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getAllKullanicilar(kullanicilar)
{
    return {
        type: GET_ALL_USERS,
        kullanicilar,
      }
}

export function answerToQuestion(soruId , cevap , authedUser)
{
    return {
        type : ANSWER_TO_QUESTION,
        authedUser,
        soruId,
        cevap
    }
}

export function addQuestionToUser(soru) {
    return {
        type: ADD_QUESTION,
        soru
    }
}