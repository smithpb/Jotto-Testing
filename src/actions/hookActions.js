import axios from "axios";

export const getSecretWord = async setSecretWord => {
  const response = await axios.get(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  setSecretWord(response.data);
};

// default export for mocking conveniencec
export default {
  getSecretWord
};
