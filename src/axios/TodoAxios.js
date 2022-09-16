import axios from 'axios'


export default function TodoListAxios(url, callback) {
  return (
    axios.get(url)
    .then((response) => {
        if(response.data) {
            callback(response.data);
        } else {
            alert("할일 목록이 존재하지 않습니다.")
        }
    })
    .catch((error) => {
        alert("할일 목록 조회에 실패했습니다.")
    })
  )
}
