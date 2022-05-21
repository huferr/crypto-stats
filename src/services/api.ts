import axios from 'axios'
import { GetCoinsTypes, GetSpecificCoinTypes } from 'typings/api';

const apiBase = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1'
});

const getCoins = async (params: GetCoinsTypes.params) => {
  const res = await apiBase.get('/coins', { params });
  return res.data as GetCoinsTypes.Response;
} 

const getSpecificCoin = async (params: GetSpecificCoinTypes.params) => {
  const res = await apiBase.get(`/coins/${params.name}`, { params: { currency: params.currency } })
  return res.data as GetSpecificCoinTypes.Response
}

export const api = {
  getCoins,
  getSpecificCoin
}