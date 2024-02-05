import { WrongAnswers } from "../pages/Exam"

export function chosen(num: number): string {
    if(num === 1) {
        return "A"
    }
    if(num === 2) {
        return "B"
    }
    if(num === 3) {
        return "C"
    }
    if(num === 4) {
        return "D"
    }
    return ""
}

export function chosenReverse(num: string): number{
    if(num === "A") {
        return 1
    }
    if(num === "B") {
        return 2
    }
    if(num === "C") {
        return 3
    }
    if(num === "D") {
        return 4
    }
    return 0
}

export function isServiceIncluded(arr: WrongAnswers[], service: string): boolean{
    if(arr?.find((item) => item.serviceType === service)){
        return true
    }
    return false
}