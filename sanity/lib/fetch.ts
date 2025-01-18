import { createClient } from "next-sanity";
import { projectId } from "../env";


const client =  createClient ({
    projectId : "dn5dxodo",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10"
})
export async function sanityFetch({query,params ={}}:{query : string , params? : any}) {
    return await client.fetch(query,params)
}