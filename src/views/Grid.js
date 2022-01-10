import React from 'react';
import ContentCard from '../components/Card/Card';
import { Link } from "react-router-dom";

export default function Grid(props) {
    const { cardList } = props;
    return (
        <div className='grid-container'>
            {cardList.map(item => (
                <div className='grid-item'>
                    <Link to="/blog" style={{textDecoration: 'none'}}>
                        <ContentCard 
                            topic={item.topic}
                            slug={item.slug}
                            desc={item.desc}
                            api={item.api}
                            color={item.color}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}
