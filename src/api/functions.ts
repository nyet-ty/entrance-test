import axios from 'axios';
import { Data } from '../reducer/state';

export const getRootChildren = async (): Promise<Data[]> => {
    const { data } = await axios('http://164.90.161.80:3000/api/content')
    return data.children
}

export const getNewChildren = async (id: number): Promise<Data> => {
    const { data } = await axios(`http://164.90.161.80:3000/api/content?dirId=${id}`)
    return data
}
