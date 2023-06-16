import axios from 'axios';

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/Items/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export const getItems = () => {
  return API.get("/");
};

export const createItem = (item) => {
  return API.post("/", item);
};

export const updateItem = (id, item) => {
  return API.patch(`${id}/`, item);
};

export const deleteItem = (id) => {
  return API.delete(`${id}/delete/`);
};

axios.delete('http://127.0.0.1:8000/api/Items/${id}/delete')
  .then(response => {
    
    console.log('Item deleted successfully');
  })
  .catch(error => {
   
    if (error.response && error.response.status === 404) {
      console.log('Item not found');
    } else {
      console.log('An error occurred');
    }
  });

export default API;






// import axios from 'axios';

// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/api/Items/",
//     // baseURL: "http://127.0.0.1:8000/api/Items/${id}/",
//     // baseURL: "http://127.0.0.1:8000/api/Items/${id}/delete",
//     headers: {
//         'Accept':'application/json',
//         'Content-Type':'application/json',
//     }
// })
