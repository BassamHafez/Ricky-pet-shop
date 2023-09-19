
import { singlePetActions } from './singlePet-slice';

const saveDataInLocalStorage=(singlPetData)=>{
    return (dispatch)=>{
        localStorage.setItem('singlePet',JSON.stringify(singlPetData.data));
    }
};


export const getSavedDataFromLocalStorage=()=>{
    return (dispatch)=>{
       const currentData = JSON.parse(localStorage.getItem('singlePet'));
       dispatch(singlePetActions.replaceData(currentData));
    }
}

export default saveDataInLocalStorage;