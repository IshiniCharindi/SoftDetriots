import { domain, header } from "./endpoint";


const sendMessageInfo = async () => {
    return await domain.post('contact/sendInfo', header)
}

export {
    sendMessageInfo
}