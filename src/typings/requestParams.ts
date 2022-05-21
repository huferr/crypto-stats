export interface GetCoinsParamsTypes {
  skip?: number,
  limit?: number,
  currency: string
}

export interface GetSpecificCoinParamsTypes {
  name: string,
  currency: string,
}