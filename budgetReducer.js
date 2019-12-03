import { combineReducers } from 'redux';
import {SETAMOUNT, CHANGEAMOUNT, ADDEXPENSE, SETEXPENSE, RESET, REPORT, MODALVIS} from './budgetActions'

const INITIAL_STATE = {
    weekAmount: "0",
    amountSpent: "0",
    amountLeft: "0",
    expenses: [],
    amt: "", 
    exp: "",
    over: false,
    modalVisible: false
}

const budgetReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
        case SETAMOUNT:
            return {
                ...state,
                amt: action.amount
            }
        case CHANGEAMOUNT: 
            let amount = state.amt
            amount = Number(amount).toFixed(2)
            return {
                ...state,
                weekAmount: amount,
                amountLeft: amount,
                amt: ""
            }
        case ADDEXPENSE: 
            return {
                ...state,
                exp: action.exp,
            }

        case SETEXPENSE:
            date = new Date().toLocaleString("en-US")
            let exp = state.exp
            let amountSpent = state.amountSpent
            exp = Number(exp).toFixed(2)
            addexp = Number(exp)
            weekAmount = Number(state.weekAmount)
            amountLeft = state.amountLeft
            if (state.amountSpent == "0") {
                amountSpent = addexp
            } else {
               amountSpent += addexp
            }
            amountLeft = weekAmount - amountSpent
            const expenses = state.expenses
            expenses.push({date: date, expense: exp, index: expenses.length})
            return {
                ...state,
                expenses: expenses,
                amountSpent: amountSpent,
                amountLeft: amountLeft,
                exp: ""
            }
        case RESET: 
            return {
                weekAmount: "0",
                amountSpent: "0",
                amountLeft: "0",
                expenses: [],
                amt: "", 
                exp:"", 
                over: false
            }
        case REPORT:
            if (state.amountLeft < 0) {
                return {
                    message: "OH NO you went over!",
                    over: true
                }
            }
            return {
                message: "You still have money to spend this week!",
                over: false
            }
        case MODALVIS:
            console.log(action.mo)
            return {
                modalVisible: !(action.mo)
            }
    }

}

export default combineReducers({
    budget: budgetReducer,
})