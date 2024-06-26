import axios from "axios";
/*****************************************************************/
// POST 형태 API
/*****************************************************************/
export const postData = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/user",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting user data:", error);
    throw error;
  }
};
