export class ProductService{
    constructor(productProvider){
        this.productProvider = productProvider
    }
    async getMostActiveUserTitles(){
        const posts = await this.productProvider.getPosts()
        let userPostCount = {}

        if(posts.length < 1){
            return []
        }

        for(const post of posts){
            if(post.userId in userPostCount) {
                userPostCount[post.userId]++
            }else{
                userPostCount[post.userId] = 1
            }
        }

        const mostActiveUserId = Object.keys(userPostCount).reduce((a, b) => userPostCount[a] > userPostCount[b] ? a : b);
        const titlesOfMostActiveUser = posts
        .filter(post=>post.userId == mostActiveUserId)
        .map(post => ({
            userId: parseInt(mostActiveUserId),
            title: post.title
        }))
        
        return titlesOfMostActiveUser
    }
}

