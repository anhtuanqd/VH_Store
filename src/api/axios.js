import axios from 'axios';

export const getData = async () => {
  const res = await axios.get('http://localhost:5000/aoquan');
  return res.data;
};
