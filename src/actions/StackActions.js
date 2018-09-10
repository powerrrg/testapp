import axios from 'axios';
export const saveQuestionsList = (data) => {
    return {
        payload: data,
        type: 'SEARCH',
    };
};
export const getQuestionsList = (data) => {
    return (dispatch, getState) => {
        axios.get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=react%20native&site=stackoverflow')
            .then((response) => {
                let questionsList = [];
                if(response.status == 200){
                    questionsList = response.data.items.map((item, i)=> {
                        return {key: i.toString(), title: item.title}
                    })
                } else {
                    questionsList = [];
                }
                dispatch(saveQuestionsList(questionsList));
            }).catch((error) => {
                alert(error);
            }
        );
    }
};