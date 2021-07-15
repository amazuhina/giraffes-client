import {giraffes} from "../tests/mocks/giraffe.mock";

export const getGiraffe = (idAviary) => giraffes.filter(i => i.idAviary === idAviary)




const giraffe = {
    id: 0 ,
    name: '',
    sex: '',
    weight: '',
    height: '',
    color: '',
    character:'',
    diet: '',
    aviaryId: 0,
}

const aviary = {
    id: 0,
    number: 0,
}


const update = {
    id: 0,
    date: '',
    giraffeId:0,
    aviaryId: 0,
    statusId: 0,
    actionId: 0,
}

const status = {
    id: 0,
    name: ''
}

const action = {
    id: 0,
    name: '',
}

