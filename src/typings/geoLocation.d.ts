interface geoLocation {
  features: features[]
}

interface features {
  type: string
  properties: Properties
  geometry: Geometry
  bbox: number[]
}

interface Properties {
  datasource: Datasource
  country_code: string
  housenumber: string
  street: string
  country: string
  county: string
  datasource: Datasource
  postcode: string
  state: string
  district: string
  city: string
  lon: number
  lat: number
  distance: number
  result_type: string
  formatted: string
  address_line1: string
  address_line2: string
  timezone: Timezone
  plus_code: string
  plus_code_short: string
  rank: Rank
  place_id: string
}

interface Datasource {
  sourcename: string
  attribution: string
  license: string
  url: string
}

interface Timezone {
  name: string
  offset_STD: string
  offset_STD_seconds: number
  offset_DST: string
  offset_DST_seconds: number
  abbreviation_STD: string
  abbreviation_DST: string
}

interface Rank {
  importance: number
  popularity: number
}

interface Geometry {
  type: string
  coordinates: number[]
}
