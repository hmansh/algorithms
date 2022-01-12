import React, { useEffect } from 'react';
import ContentCard from '../components/Card/Card';
import { Link } from "react-router-dom";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function Grid(props) {
    const { cardList, setDrawerItems } = props;

    useEffect(() => {
        setDrawerItems({
            'Data Structures': 'data-structures',
            'Algorithms': 'algorithms',
            'Codeforce': 'codeforces',
            'Questions': 'questions'
        });
    }, []);

    return (
        <div id="content-container">
            {cardList.length ? <div className='grid-container'>
                {cardList.map(item => (
                    <div className='grid-item'>
                        <Link to="/blog" style={{ textDecoration: 'none' }}>
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
            </div> : <div style={{ minHeight: '80vh', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ErrorOutlineOutlinedIcon large style={{ margin: '35vh auto 0 auto' }} />
                    <div style={{ whiteSpace: 'nowrap' }}>Oops! nothings here</div>
                </div>
            </div>
            }
        </div>
    )
}