import axios from "axios"

export class ProductProvider{
    constructor() {}
    
    async getPosts() {
        try {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          return result.data;
        } catch (err) {
          return err;
        }
      }
}