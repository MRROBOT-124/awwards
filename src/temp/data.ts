import { FeaturedItems } from "@/entities/featuredList";
import { Tags } from "@/entities/tags";

export const featuredList: FeaturedItems[] = [{
    imageUrl: 'https://assets.awwwards.com/assets/redesign/images/header/search/featured/1.jpg',
    title: "Sites of the day",
    websiteUrl: "/websites/sites_of_the_day/"
},
{
    imageUrl: 'https://assets.awwwards.com/assets/redesign/images/header/search/featured/2.jpg',
    title: "Websites",
    websiteUrl: "/websites/"
},
{
    imageUrl: 'https://assets.awwwards.com/assets/redesign/images/header/search/featured/3.jpg',
    title: "Elements",
    websiteUrl: "/elements/"
},
{
    imageUrl: 'https://assets.awwwards.com/assets/redesign/images/header/search/featured/4.jpg',
    title: "Courses",
    websiteUrl: "/courses/"
}]

export const featuredTags: Tags[] = [{
    name: "Animations",
    route: "/websites/animations"
},
{
    name: "Portfolio",
    route: "/websites/portfolio"
},
{
    name: "404 Pages",
    route: "/404"
},
{
    name: "Clean",
    route: "/websites/clean"
}]

export const slider: FeaturedItems[] = [{
    imageUrl: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/01/sotm-january-2023-thumb.jpg',
    title: "Vote for Site og the Month January 2023",
    websiteUrl: "/websites/sites_of_the_day/"
},
{
    imageUrl: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/01/khaby-thumb.jpg',
    title: "ICON x Khaby Lame - An Interactive Editorial",
    websiteUrl: "/websites/"
},
{
    imageUrl: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/01/atmos-thumb.jpg',
    title: "Case Study: ATMOS",
    websiteUrl: "/elements/"
},
{
    imageUrl: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2022/12/aj-thumb.jpg',
    title: "Abhishek Jha - Portfolio 2022",
    websiteUrl: "/courses/"
}]
