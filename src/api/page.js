import { fetch } from './base'

// github
export const myCase = async ( params ) => {
    const res = await fetch({
        url: '/repos',
        params: params
    })
    return res
}