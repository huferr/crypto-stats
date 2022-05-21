import axios from 'axios'
import { GetCoinsParamsTypes, GetSpecificCoinParamsTypes } from 'typings/requestParams';

const apiBase = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1'
});

const getCoins = async (params: GetCoinsParamsTypes) => {
  const res = await apiBase.get('/coins', { params });
  return res;
} 

const getSpecificCoin = async (params: GetSpecificCoinParamsTypes) => {
  const res = await apiBase.get(`/coins/${params.name}`, { params: { currency: params.currency } })
  return res
}

export const api = {
  getCoins,
  getSpecificCoin
}