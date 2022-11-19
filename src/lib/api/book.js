import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * 도서 등록
 * @param {*} formData 사진 + 책 정보
 * @param {*} accessToken 
 * @returns 
 */
export const postBookData = async (formData, accessToken) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/book`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
};

/**
 * 등록된 책들의 리스트 요청
 * @returns 
 */
export const getBooks = async () => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}`,
  })
}; 

/**
 * 도서 상세 조회
 * @param {*} isbn 
 * @param {*} accessToken 
 * @returns 
 */
export const getBookDetails = async (isbn, accessToken) => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}/book/${isbn}`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    }
  })
};

/**
 * 도서 삭제
 * @returns 
 */
export const deleteBook = async () => {
  return await axios({
    method: "delete",
    url: `${SERVER_URL}`,
  })
}; 