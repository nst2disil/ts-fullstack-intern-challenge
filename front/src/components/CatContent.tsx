import './CatContent.css';
import { useState } from 'react';
import { FAV_CATS_URL } from '../constants';

interface CatProps {
    id: string;
    url: string;
    isFavorite: boolean;
    deleteFavCat: (id: string, isFavorited: boolean) => void;
}

const CatContent: React.FC<CatProps> = ({ id, url, isFavorite, deleteFavCat }) => {
    const [hoveredCat, setHoveredCat] = useState(false);
    const [clickedCat, setClickedCat] = useState(isFavorite);

    const heartClick = async () => {
        const newClickState = !clickedCat;
        setClickedCat(newClickState);

        try {
            if (newClickState) {
                await fetch(FAV_CATS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id, url: url }),
                });
            }
            else {
                await fetch(`${FAV_CATS_URL}/${id}`, {
                    method: 'DELETE',
                });

                deleteFavCat(id, newClickState);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='cat-container'>
            <img src={url}
                className='cat-image' alt='Cat' />
            <div className='cat-like'>
                <img src={clickedCat ?
                    'heart3.svg'
                    : hoveredCat ?
                        'heart2.svg'
                        : 'heart1.svg'}
                    className='heart' alt='heart'
                    onMouseEnter={() => setHoveredCat(true)}
                    onMouseLeave={() => setHoveredCat(false)}
                    onClick={heartClick}
                />
            </div>
        </div>
    )
}

export default CatContent;