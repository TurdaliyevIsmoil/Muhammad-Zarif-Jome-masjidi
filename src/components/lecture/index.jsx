import { useState, useEffect } from 'react';
import './style.scss';
import Video from './video';


export default function (props) {
    const [videos, setvideos] = useState([]);
    const channelId = "UCRssLph3U5KjLZTFseUoR_A";
    useEffect(() => {
        try {
            async function getData() {
                const data = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${channelId}`).then(data => data.json());
                setvideos(data.items.slice(0, 3))
            }
            getData();
        }catch(err){
           console.log(err)
        }
    }, []);

    return (<div className='lectures'>
        <div className="container">
            <h1 className="title">Juma Maruzalar</h1>
            <div className="lecture-videos">
                {videos.map(data=><Video key={data.link} data={data}/>)}
            </div>
        </div>
    </div>);
}
