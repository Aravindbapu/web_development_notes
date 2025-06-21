export default function Page({ params }) {
    // fetch your blog post by its slug
    let cars = ["bmw", "benz", "audi"]
    if(cars.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    } else {
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
}