interface Coin {
  id: string,
  icon: string,
  name: string,
  symbol: string,
  rank: number,
  price: number,
  priceBtc: number,
  volume: number,
  marketCap: number,
  availableSupply: number,
  totalSupply: number,
  priceChange1h: number,
  priceChange1d: number,
  priceChange1w: number,
  websiteUrl: string,
  redditUrl: string,
  twitterUrl: string,
  exp: []
}

export declare namespace GetSpecificCoinTypes {
  interface Params {
    name: string,
    currency: string
  }

  interface Response {
    coins: Coin
  }
}

export declare namespace GetCoinsTypes {
  interface Params {
    skip?: number,
    limit?: number,
    currency: string
  }

  interface Response {
    coins: Coin[]
  }
}