import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'


export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i ) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);

}

export function calPercentage( earnPoints ){
    return (earnPoints / 5) * 100; /*Porcentagem de acertos */
}

/*Checando autorização do usuário */
export function CheckUserExists({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children :  <Navigate to={'/'} replace ={true}></Navigate>
}

/*Pegar dados do banco*/
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback (data) : data;
}

/*Colocar os dados do banco */
export async function postServerData(url,result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback (data) : data;
}