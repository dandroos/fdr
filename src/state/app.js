const initialState = {
    lang: 'en'
}

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export const setLanguage = language =>({
    type: CHANGE_LANGUAGE,
    lang: language
})

export default(state = initialState, action)=>{
    switch(action.type){
        case CHANGE_LANGUAGE:
            localStorage.setItem('fdr_lang', action.lang)
            return {
                lang: action.lang
            }
        default:
            return state
    }
}