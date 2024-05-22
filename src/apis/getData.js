import axios from "axios";
/*****************************************************************/
// GET 형태 API
/*****************************************************************/
export const getData = async (userData) => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/user",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting user data:", error);
    throw error;
  }
};
