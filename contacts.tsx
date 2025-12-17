import { Website } from './types';

const initialWebsites: Website[] = [
    {
        id: '1',
        title: 'My Portfolio',
        description: 'A personal portfolio showcasing my projects and skills in web development.',
        imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
        category: 'MBTI',
        path: '/Portfolio', 
    },
    {
        id: '2',
        title: 'Travel Blog',
        description: 'Documenting my adventures around the globe with stories and photography.',
        imageUrl: 'https://picsum.photos/seed/travel/600/400',
        category: '게임',
        path: '/Travel_Blog', 
    },
    {
        id: '3',
        title: 'moviePoster',
        description: 'moviePostermoviePostermoviePoster',
        imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
        category: '게임',
        path: '/moviePoster', 
    },
    {
        id: '4',
        title: 'SpaceShooter',
        description: 'SpaceShooterSpaceShooterSpaceShooter',
        imageUrl: '원하는 이미지 경로 추가',
        category: '게임',
        path: '/NewPage', 
/* App.tsx에 추가한 Route path를 추가해주세요. 
<Route path="spaceshooter" element={<spaceshooter />} /> */
    },
];

export const contactsData = initialWebsites;
export default initialWebsites;