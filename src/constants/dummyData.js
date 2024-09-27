import { aboutIcon, addImage, bluetooth, bookingIcon, cash, detailDoor, detailSeat, economyCar, favouriteIcon, gps, helpIcon, homeDelivery, homeIcon, logoutIcon, luxuryCar, miniCooperSe, onlinePay, pickupImage, polestar, porsche, privacyIcon, profileIcon, suvCar } from "../assets/index";
import { WIDTH } from "./dimension";

export const welcomeData = [{ id: 0, logo: true, title: 'COMPETITIVE PRICE' }, { id: 1, logo: true, title: 'CAR DELIVERY AND DISPATCH' }, { id: 2, logo: true, title: 'DEPOSIT & EASE OF PAYMENT' }, { id: 3, logo: true, title: 'ROAD SERVICE' }, { logo: true, title: 'Q MILES REWARD' }, { id: 4, logo: true, title: 'LATEST CAR MODELS' }, { id: 5, logo: true, title: 'FULL INSURURANCE' }]

export const carList = [
    { id: 1, carImage: miniCooperSe, name: "MINI COOPER SE", gear: "Manual", numDoors: 4, numSeats: 4, power: "Solar", price: '250' },
    { id: 2, carImage: polestar, name: "POLESTAR 2", gear: "Automatic", numDoors: 4, numSeats: 5, power: "Solar", price: '250' },
    { id: 3, carImage: porsche, name: "PORSCHE TAYCAN", gear: "Automatic", numDoors: 4, numSeats: 4, power: "Solar", price: 250 }]

export const profileDetails = [{ id: 0, placeholder: 'Full Name', value: 'name', width: WIDTH * 0.9 }, { id: 1, placeholder: 'Email', value: 'email', width: WIDTH * 0.9 }]

export const termsData = [{ id: 0, text: 'we will be charging  in case any thing happens', boldText: ' 1000QR' }, { id: 1, text: 'Lorem Ipsum has been the text ever since the', boldText: ' industry standard dummy' }, { id: 2, text: 'make a type specimen book. It has survived not only five centuries', boldText: '' }, { id: 3, text: 'It is a long established fact that a reader will be distracted by the of a page', boldText: ' readable content' }, { id: 4, text: 'Many desktop publishing packages and now use Lorem Ipsum as their default ', boldText: ' web page editors' }, { id: 5, text: 'There are many variations of passages of Lorem Ipsum available, but the alteration in some form', boldText: ' majority have suffered' }, { id: 6, text: 'The first line of Lorem Ipsum, " sit amet..", comes from a line ', boldText: ' Lorem ipsum dolor' }, { id: 7, text: 'Latin words, combined with a handful of model sentence structures, to  which looks reasonable. The generated Lorem Ipsum is therefore always free', boldText: ' generate Lorem Ipsum' }, { id: 8, text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id', boldText: '' }, { id: 9, text: 'Sed ut omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ', boldText: ' perspiciatis unde' }, { id: 10, text: 'Ut enim ad minima veniam, quis ullam corporis suscipit laboriosam', boldText: ' nostrum exercitationem' }, { id: 11, text: 'But I must explain to you how all this of denouncing pleasure and praising pain was born ', boldText: ' mistaken idea' }, { id: 12, text: ' Nor again is there anyone who or desires to obtain pain of itself, because it is pain, but because occasionally circumstances ', boldText: ' loves or pursues' },]

export const requiredDoc = [{ id: 0, image: addImage, title: 'Driving License' }, { id: 1, image: addImage, title: 'Qatari Id' }]

export const paymentMethods = [{ id: 0, image: cash, title: 'Cash Payment' }, { id: 1, image: onlinePay, title: 'Online Payment' }]

export const vehicleReceive = [{ id: 0, image: pickupImage, title: 'Pick-Up From A Branch' }, { id: 1, image: homeDelivery, title: 'Home Delivery' }]

export const drawerData = [{ id: 0, icon: homeIcon, title: 'Home' }, { id: 1, icon: bookingIcon, title: 'My Booking' }, { id: 2, icon: profileIcon, title: 'Profile' }, { id: 3, icon: favouriteIcon, title: 'Favourite' }, { id: 4, icon: aboutIcon, title: 'About Us' }, { id: 5, icon: privacyIcon, title: 'Privacy Policy' }, { id: 6, icon: helpIcon, title: 'Help' }, { id: 7, icon: logoutIcon, title: 'Logout' }]

export const summaryDates = [{ id: 0, type: 'PICK - UP', date: '7, July 2020', time: '10:00 am' }, { id: 1, type: 'DROP - OFF', date: '10, July 2020', time: '11:00 pm' }]

export const detailData = [{ id: 0, itemImage: detailDoor, name_en: "Doors", door_count: '4' }, { id: 1, itemImage: detailSeat, name_en: "Seats", seating_capacity: '7' }, { id: 3, itemImage: gps, name_en: "Gps", available: 'Available' }, { id: 4, itemImage: bluetooth, name_en: "Bluetooth", available: 'Available' }, { id: 5, name_en: "Price/Day", amount_per_day: '250' }, { id: 6, name_en: "07-10 July", total: '1000' }]


export const loginDetails = [{ id: 0, placeholder: '+91', value: 'code', width: WIDTH * 0.2, nextRef: 'number' }, { id: 1, placeholder: '4456', value: 'number', width: WIDTH * 0.64 }]

export const otpData = [{ id: 0, name: 'otp1', width: WIDTH * 0.08 }, { id: 1, name: 'otp2', width: WIDTH * 0.08 }, { id: 2, name: 'otp3', width: WIDTH * 0.08 }, { id: 3, name: 'otp4', width: WIDTH * 0.08 }]

export const cardData = [{ id: 0, image: economyCar, type: 'ECONOMY', backgroundAlign: 'right' }, { id: 1, image: suvCar, type: 'SUV (4x4)', backgroundAlign: 'left' }, { id: 2, image: luxuryCar, type: 'LUXURY', backgroundAlign: 'right' }]