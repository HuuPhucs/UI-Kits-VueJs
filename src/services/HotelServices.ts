import axios from "axios";

const CONTROLLER_NAME = 'https://6600e1e187c91a116419b58b.mockapi.io/hotelPhucBeo'

const GetAll = async (param: any) => {
  const res = await axios.get(`${CONTROLLER_NAME}`, param)
  return res.data
}

const HotelServices = {
  GetAll,
}

export default HotelServices
