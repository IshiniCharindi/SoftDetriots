import { domain, header } from "./endpoint";


const sendMessageInfo = async () => {
    return await domain.get('contact', header)
}

export {
    sendMessageInfo
}