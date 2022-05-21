import axios from 'axios'
import { GetCoinsTypes, GetSpecificCoinTypes } from 'typings/api';

const apiBase = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1'
});

const getCoins = async (params: GetCoinsTypes.Params) => {
  const { data } = await apiBase.get('/coins', { params });
  return data as GetCoinsTypes.Response;
} 

const getSpecificCoin = async (params: GetSpecificCoinTypes.Params) => {
  const { data } = await apiBase.get(`/coins/${params.name}`, { params: { currency: params.currency } })
  return data as GetSpecificCoinTypes.Response
}

export const api = {
  getCoins,
  getSpecificCoin
}