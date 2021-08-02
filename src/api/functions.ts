import axios from 'axios';
import { Directory } from '../reducer/state';

export const getRootChildren = async (): Promise<Directory[]> => {
    const { data } = await axios('http://164.90.161.80:3000/api/content')
    return data.children
}

export const getNewChildren = async (id: number): Promise<Directory[]> => {
    const { data } = await axios(`http://164.90.161.80:3000/api/content?dirId=${id}`)
    return data.children
}
