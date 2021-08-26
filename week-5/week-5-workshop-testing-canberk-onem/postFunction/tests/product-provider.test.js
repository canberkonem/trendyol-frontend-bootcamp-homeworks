import axios from "axios"
import {ProductProvider} from "../services/product-provider"
jest.mock("axios")

describe("Get Posts from API", ()=>{
    test('should return data',async () => {
        const productProvider = new ProductProvider()
        axios.get.mockImplementation(()=>{
            return Promise.resolve({data:[
                {
                    userId: 1,
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]
            })
        })
        expect(await productProvider.getPosts()).toEqual([
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        ])
    })

    test('should return Network error when it fails',async () => {
        const productProvider = new ProductProvider()
        axios.get.mockImplementation(()=>{
            return Promise.reject("Network Error")
        })
        expect(await productProvider.getPosts()).toBe("Network Error")
    })
    
})

