import { Data } from "./state";

export enum ActionType {
    LOAD_ROOT_CHILDREN = 'LOAD_ROOT_CHILDREN',
    LOAD_NEW_CHILDREN = 'LOAD_NEW_CHILDREN'
}

export interface LoadRootChildren {
    type: ActionType.LOAD_ROOT_CHILDREN;
    payload: Data[]
}

export interface LoadNewChildren {
    type: ActionType.LOAD_NEW_CHILDREN;
    payload: { id: number };
}

export type Actions = LoadRootChildren | LoadNewChildren