export const SETAMOUNT = "SETAMOUNT"
export const CHANGEAMOUNT = "CHANGEAMOUNT"
export const RESET = "RESET"
export const ADDEXPENSE= "ADDEXPENSE"
export const SETEXPENSE = "SETEXPENSE"
export const REPORT = "REPORT"
export const MODALVIS = "MODALVIS"


const setAmount = amount => (
    {
        type: SETAMOUNT,
        amount:amount
    }
)
const changeAmount = amount => (
    {type: CHANGEAMOUNT}
)

const reset = newWeek => (
    {type:RESET}
)

const setExp = exp => (
    {
        type: ADDEXPENSE,
        exp:exp
    }
)
const addExp = exp => (
    {type: SETEXPENSE}
)  

const report = amount => (
    {
        type:CHECK
    }
)

const modalvis = mo => (
    {
        type: MODALVIS,
        mo:mo
    }
)

export {setAmount, changeAmount, addExp, setExp, reset, report, modalvis}