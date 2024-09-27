import React from 'react'
import { warning } from '../assets'
import CautionComponent from '../components/CautionComponent'

const WarningScreen = () => {
  return (
    <CautionComponent image={warning} title="PRICE WILL BE CALCULATED FOR 24 HOURS" desc="If you rent the car for less than one day, the price is calculated for 24 hours" btnTitle="NO PROBLEM" warnlink="Cancel"/>
  )
}

export default WarningScreen