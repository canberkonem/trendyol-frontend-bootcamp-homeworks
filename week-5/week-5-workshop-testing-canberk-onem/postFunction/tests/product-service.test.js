import { ProductService } from "../services/product-service"
import { ProductProvider } from "../services/product-provider"

jest.mock("../services/product-provider")
describe("Post Service",()=>{
    const productProvider = new ProductProvider()
    const productService = new ProductService(productProvider);
    test('should return titles of most active user', async () => {
        productProvider.getPosts.mockImplementation(()=>{
            return Promise.resolve([
                {
                    userId: 1,
                    id: 9,
                    title: "nesciunt iure omnis dolorem tempora et accusantium",
                    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
                },
                {
                    userId: 1,
                    id: 10,
                    title: "optio molestias id quia eum",
                    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
                },
                {
                    userId: 2,
                    id: 11,
                    title: "et ea vero quia laudantium autem",
                    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
                 }
            ])  
        })
        expect(await productService.getMostActiveUserTitles()).toEqual(
            [
                {
                    userId: 1,
                    title: "nesciunt iure omnis dolorem tempora et accusantium",
                },
                {
                    userId: 1,
                    title: "optio molestias id quia eum",
                },
            ]
        )
    })
    
    it("should return empty array if posts is empty", async () => {
        productProvider.getPosts.mockImplementation(() => {
          return Promise.resolve([]);
        });
        expect(await productService.getMostActiveUserTitles()).toEqual([]);
      })

})