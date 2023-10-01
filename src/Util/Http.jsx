import axios from "axios";

export const fetchDogsData = async ({ signal, selected }) => {
  const response = await axios(
    `https://api.thedogapi.com/v1/images/search?limit=21&breed_ids=${selected}&api_key=live_2KezZROYSVMIobsbx3rgXKK80nHNTjiwEeW2TezLDOCWKSIMuxp11MLd0wxnKCMD`,
    { signal }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Couldn't fetch data well please try again later!");
  }
};

export const fetchCatsData = async ({ signal, selected }) => {
  const response = await axios(
    `https://api.thecatapi.com/v1/images/search?limit=21&breed_ids=${selected}&api_key=live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h`,{signal}
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Couldn't fetch data well please try again later!");
  }
};
