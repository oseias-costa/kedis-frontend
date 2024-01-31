import axios from "axios"

export const baseUrl: string = "http://localhost:8100"

export async function httpClient(endpoint: string, method: string, data?: any){
    const token = localStorage.getItem("kedisToken")

    const res = await axios({
        url: `${baseUrl}${endpoint}`,
        method: method,
        data: JSON.stringify(data),
        headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    return res
}