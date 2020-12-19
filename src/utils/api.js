import{ _saveQuestion, _saveQuestionAnswer, _getUsers, _getQuestions } from './_DATA'

export function getInitialAppData(){
    return Promise.all([_getUsers , _getQuestions]) // APİ 'DEN datayı çek 
                  .then(([kullanicilar,cevaplar]) => ({
                          kullanicilar,
                          cevaplar
                        })) 

}