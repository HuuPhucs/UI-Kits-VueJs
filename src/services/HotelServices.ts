import axios from "axios";

// const CONTROLLER_NAME = 'https://6600e1e187c91a116419b58b.mockapi.io/hotelPhucBeo'
const CONTROLLER_NAME = 'https://6600e1e187c91a116419b58b.mockapi.io/roomsHotel'

const GetAll = async () => {
  const res = await axios.get(`${CONTROLLER_NAME}`)
  return res.data
}

const HotelServices = {
  GetAll,
}

export default HotelServices
