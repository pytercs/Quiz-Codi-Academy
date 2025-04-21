import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        
    }
}

/*Inserindo dados do usuário */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result != [] && !username) throw new Error("Não foi possível receber nenhum resultado");
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}