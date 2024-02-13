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
    for(let i = 0; i < arr.length; i++){
        console.log(`
            is service is included >>>>
            ---------------------------

            arr[i].serviceType ${arr[i].serviceType}
            service: ${service}
        `)
        if(arr[i].serviceType === service){
            return true
        }
    }
    return false
}

export function sumWrongAnswer(wrongAnswers: WrongAnswers[], serviceType: string): void{
   wrongAnswers.map((item) => {
        if(item.serviceType === serviceType){
            item.total += 1
            item.wrongAnswers += 1
        }}) 
}

export const initialQuestionChoiseState = {
        id: 0, 
        choice: "",
        correction: false,
        chosen: ""    
}