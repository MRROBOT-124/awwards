import { FeaturedItems } from "@/entities/featuredList";
import { Tags } from "@/entities/tags";
import { Website } from "@/entities/website";

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
    route: "/websites/animations",
    color: ""
},
{
    name: "Portfolio",
    route: "/websites/portfolio",
    color: ""
},
{
    name: "404 Pages",
    route: "/404",
    color: ""
},
{
    name: "Clean",
    route: "/websites/clean",
    color: ""
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


export const websites: Website[] = [{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63d2b3bf92ef5296111948.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63d2b3bf92ef5296111948.png 2x',
    name: 'Bonne Sobriyearté 2023',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1852177/63e67577776a4187274127.png',
    companyName: 'Havas Factory',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63c197b22e3ad391897464.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63c197b22e3ad391897464.png 2x',
    name: 'Cartier In Time',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/207/560d58029b7c5.jpeg',
    companyName: 'Immersive Garden',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bc37431dff2418372986.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bc37431dff2418372986.jpg 2x',
    name: 'Crosswire',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/81205/6380bf3d61bdf003477018.png',
    companyName: 'Unseen Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/12/6398afb2d9e57153864906.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/12/6398afb2d9e57153864906.png 2x',
    name: 'OHM studio',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/846088/63986023a8be5990981231.png',
    companyName: 'Thomas Boyer-Gibaud',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bedd2ced8f2129124805.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bedd2ced8f2129124805.jpg 2x',
    name: 'Yuga Labs',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/965022/614d9fa516e48664985959.png',
    companyName: 'Antinomy Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63d2b3bf92ef5296111948.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63d2b3bf92ef5296111948.png 2x',
    name: 'Bonne Sobriyearté 2023',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1852177/63e67577776a4187274127.png',
    companyName: 'Havas Factory',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63c197b22e3ad391897464.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63c197b22e3ad391897464.png 2x',
    name: 'Cartier In Time',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/207/560d58029b7c5.jpeg',
    companyName: 'Immersive Garden',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bc37431dff2418372986.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bc37431dff2418372986.jpg 2x',
    name: 'Crosswire',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/81205/6380bf3d61bdf003477018.png',
    companyName: 'Unseen Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/12/6398afb2d9e57153864906.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/12/6398afb2d9e57153864906.png 2x',
    name: 'OHM studio',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/846088/63986023a8be5990981231.png',
    companyName: 'Thomas Boyer-Gibaud',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bedd2ced8f2129124805.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bedd2ced8f2129124805.jpg 2x',
    name: 'Yuga Labs',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/965022/614d9fa516e48664985959.png',
    companyName: 'Antinomy Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63d2b3bf92ef5296111948.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63d2b3bf92ef5296111948.png 2x',
    name: 'Bonne Sobriyearté 2023',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1852177/63e67577776a4187274127.png',
    companyName: 'Havas Factory',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63c197b22e3ad391897464.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63c197b22e3ad391897464.png 2x',
    name: 'Cartier In Time',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/207/560d58029b7c5.jpeg',
    companyName: 'Immersive Garden',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bc37431dff2418372986.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bc37431dff2418372986.jpg 2x',
    name: 'Crosswire',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/81205/6380bf3d61bdf003477018.png',
    companyName: 'Unseen Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2022/12/6398afb2d9e57153864906.png 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/12/6398afb2d9e57153864906.png 2x',
    name: 'OHM studio',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/846088/63986023a8be5990981231.png',
    companyName: 'Thomas Boyer-Gibaud',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

},{
    imgSrcSet: 'https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63bedd2ced8f2129124805.jpg 1x, https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/01/63bedd2ced8f2129124805.jpg 2x',
    name: 'Yuga Labs',
    logo: 'https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/965022/614d9fa516e48664985959.png',
    companyName: 'Antinomy Studio',
    tags: [
        {
            name: "DEV",
            route: "/",
            color: "#8eabc6"
        },
        {
            name: "SOTD",
            route: "/",
            color: "#ce6644"
        }
    ]

}

]