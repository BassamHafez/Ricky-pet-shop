import {createSlice} from '@reduxjs/toolkit';


const singlePetSlice =createSlice({
    name:'singlePet',
    initialState:{
        data:{}
    },
    reducers:{
        sendDataFromCats(state,action){
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
                type:'cat'
                
            }
        },
        sendDataFromDogs(state,action){
            const existingData = action.payload;
            state.data={
                id:existingData.id,
                name:existingData.name,
                height:existingData.height,
                width:existingData.width,
                src:existingData.src,
                temperament:existingData.temperament,
                life:existingData.life,
                bred_for:existingData.bred_for,
                breed_group:existingData.breed_group,
                weight_imperial:existingData.weight_imperial,
                weight_metric:existingData.weight_metric,
                type:'dog'
                
            }
        },
    }
});

export const singlePetActions= singlePetSlice.actions;
export default singlePetSlice;