import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const gettoken = async () => {
    const user = await AsyncStorage.getItem('@user');
    return user;
};
let token = '';
gettoken().then((result) => {
    token = result;
    console.log(token);
    return token;
});
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export const CheckOut = async (hotelId, bookingId) => {
    const res = await axios.put(
        `api/HostManage/Checkout-Local?hotelId=${hotelId}&bookingID=${bookingId}`,
        {},
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    return res.data;
};

export const CheckInRoom = async (
    roomId,
    hotelId,
    totalNight,
    userEmail,
    totalPrice,
    isPayment,
    deposit,
    customerlist,
) => {
    console.log(customerlist);
    const res = await axios.post(
        'api/HostManage/Host-Local-Payment-final',
        {
            hotelId: hotelId,
            userId: 0,
            email: userEmail,
            arrivalDate: today,
            totalNight: totalNight,
            totalPrice: totalPrice,
            paymentCondition: isPayment,
            deposit: deposit,
            bookingDetails: [
                {
                    roomId: roomId,
                },
            ],
            inboundUsers: customerlist,
        },
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return res.data;
};
export const CheckRoomDateBooking = async (roomId, hotelId, totalNight) => {
    const res = await axios.post(
        'api/HostManage/Check-Room-Date-Booking',
        {
            hotelId: hotelId,
            arrivalDate: today,
            totalNight: totalNight,
            bookingDetails: [
                {
                    roomId: roomId,
                },
            ],
        },
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return res.data;
};
export const getRoomInfo = async (roomId) => {
    const res = await axios.get('api/HostManage/Host-A-Detail-Room', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            RoomId: roomId,
            today: today,
        },
    });
    return res.data;
};
export const GetAllStatus = async (token, today, hotelId) => {
    const res = await axios.get('api/HostManage/Host-A-Hotel-All-Room-Status-Today', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            hotelId: hotelId,
            today: today,
        },
    });
    return res.data;
};

export const GetStatusCheckOut = async (token, today, hotelId) => {
    const res = await axios.get('api/HostManage/Host-A-Hotel-All-Room-Status-CheckOut', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            hotelId: hotelId,
            today: today,
        },
    });
    return res.data;
};

export const GetStatusSearch = async (token, today, hotelId, totalNight) => {
    const res = await axios.get('api/HostManage/Host-A-Hotel-All-Room-Status-Search', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            hotelId: hotelId,
            ArrivalDate: today,
            totalnight: totalNight,
        },
    });
    return res.data;
};