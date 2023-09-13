import {createSlice} from '@reduxjs/toolkit';


const singlePetSlice =createSlice({
    name:'singlePet',
    initialState:{
        data:{}
    },
    reducers:{
        sendData(state,action){
            const existingData = action.payload;
            state.data={
                id:existingData.id,
                name:existingData.name,
                src:existingData.src,
                desc:existingData.desc,
                country:existingData.country,
                wiki:existingData.wiki,
                vcahospitals_url:existingData.vcahospitals_url,
                vetstreet_url:existingData.vetstreet_url,
                temperament:existingData.temperament,
                life:existingData.life,
                adaptability:existingData.adaptability,
                intelligence:existingData.intelligence,
                social_needs:existingData.social_needs,
                energy_level:existingData.energy_level,
                
            }
        },
    }
});

export const singlePetActions= singlePetSlice.actions;
export default singlePetSlice;