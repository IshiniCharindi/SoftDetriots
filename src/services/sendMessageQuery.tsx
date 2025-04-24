import { domain, header } from "./endpoint";
import {CustomerInterface} from "../Models/Customer"

const sendMessageInfo = async(customer: CustomerInterface) =>{
    return await domain.post('contact/sendInfo', customer, header)
}

export {
    sendMessageInfo
}