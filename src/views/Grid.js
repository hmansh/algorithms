import React from 'react';
import ContentCard from '../components/Card/Card';

export default function Grid(props) {
    const { cardList } = props;
    return (
        <div className='grid-container'>
            {cardList.map(item => (
                <div className='grid-item'>
                    <ContentCard 
                        topic={item.topic}
                        slug={item.slug}
                        desc={item.desc}
                        api={item.api}
                        color={item.color}
                    />
                </div>
            ))}
        </div>
    )
}
