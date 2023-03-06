export type InitState = {
    num: number
    max: number
    start: number
    error: string
}

const initState: InitState = {
    num: 0,
    max: 5,
    start: 0,
    error: ''
}

export type IncClickActionType = ReturnType<typeof incClickAC>
export type ResClickActionType = ReturnType<typeof resClickAC>
export type OnClickActionType = ReturnType<typeof onClickAC>
export type onChangeStartActionType = ReturnType<typeof onChangeStartAC>
export type onChangeMaxActionType = ReturnType<typeof onChangeMaxAC>

type ActionsType = IncClickActionType
    | ResClickActionType
    | OnClickActionType
    | onChangeStartActionType
    | onChangeMaxActionType

export const counterReducer = (state = initState, action: ActionsType): InitState => {
    switch (action.type) {
        case 'INC-CLICK': {
            return {...state, num: state.num + 1}
        }
        case 'RES-CLICK': {
            return {...state, num: state.start}
        }
        case 'ON-CLICK': {
            return {
                ...state,
                num: state.start,
                error: state.error = ''
            }
        }
        case 'CHANGE-START': {
            return {
                ...state,
                start: action.value,
                error: action.value >= state.max || action.value < 0
                    ? 'invalid value' : 'set'
            }
        }
        case 'CHANGE-MAX': {
            return {
                ...state,
                max: action.value,
                error: action.value <= state.start || action.value < 0
                    ? 'invalid value' : 'set'
            }
        }
        default:
            return state
    }
}

export const incClickAC = () => {
    return {type: 'INC-CLICK'} as const
}
export const resClickAC = () => {
    return {type: 'RES-CLICK'} as const
}
export const onClickAC = () => {
    return {type: 'ON-CLICK'} as const
}
export const onChangeStartAC = (value: number) => {
    return {type: 'CHANGE-START', value} as const
}
export const onChangeMaxAC = (value: number) => {
    return {type: 'CHANGE-MAX', value} as const
}


// export const setInitializeLCValues = (values: {}) => ({type: 'SET_INITIALIZE_VALUES', values})