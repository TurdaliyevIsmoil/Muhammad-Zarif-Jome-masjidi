import { useState, useRef } from 'react';
import Article from '../article';
import './style.scss';

const datas = [
    {
        id: 1,
        title: "yangi muftiy tayinlandi",
        img: require('../../images/woman.png'),
        date: new Date().getTime(),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eu ultrices ut scelerisque dolor fusce sed libero netus. Morbi tellus mi arcu pellentesque tincidunt massa faucibus. Pellentesque sagittis vestibulum, in vitae. Consectetur amet, aenean facilisis augue nunc, platea volutpat sit. Nibh vel risus senectus donec commodo turpis euismod erat suspendisse. Aenean convallis velit elit vestibulum ac a at. Aliquet tortor tincidunt bibendum auctor in velit vulputate. Lectus mi scelerisque porttitor in nec bibendum. Elit, hac in commodo ullamcorper. Etiam ac ultricies scelerisque rutrum vel ligula pharetra bibendum. Egestas non viverra odio nullam dui, enim, scelerisque at eget. Pellentesque turpis aliquam amet mattis gravida...'
    },
    {
        id: 2,
        title: "yangi muftiy tayinlandi",
        img: require('../../images/woman-2.png'),
        date: new Date().getTime(),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eu ultrices ut scelerisque dolor fusce sed libero netus. Morbi tellus mi arcu pellentesque tincidunt massa faucibus. Pellentesque sagittis vestibulum, in vitae. Consectetur amet, aenean facilisis augue nunc, platea volutpat sit. Nibh vel risus senectus donec commodo turpis euismod erat suspendisse. Aenean convallis velit elit vestibulum ac a at. Aliquet tortor tincidunt bibendum auctor in velit vulputate. Lectus mi scelerisque porttitor in nec bibendum. Elit, hac in commodo ullamcorper. Etiam ac ultricies scelerisque rutrum vel ligula pharetra bibendum. Egestas non viverra odio nullam dui, enim, scelerisque at eget. Pellentesque turpis aliquam amet mattis gravida...'
    },
    {
        id: 3,
        title: "yangi muftiy tayinlandi",
        img: require('../../images/woman-3.png'),
        date: new Date().getTime(),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eu ultrices ut scelerisque dolor fusce sed libero netus. Morbi tellus mi arcu pellentesque tincidunt massa faucibus. Pellentesque sagittis vestibulum, in vitae. Consectetur amet, aenean facilisis augue nunc, platea volutpat sit. Nibh vel risus senectus donec commodo turpis euismod erat suspendisse. Aenean convallis velit elit vestibulum ac a at. Aliquet tortor tincidunt bibendum auctor in velit vulputate. Lectus mi scelerisque porttitor in nec bibendum. Elit, hac in commodo ullamcorper. Etiam ac ultricies scelerisque rutrum vel ligula pharetra bibendum. Egestas non viverra odio nullam dui, enim, scelerisque at eget. Pellentesque turpis aliquam amet mattis gravida...'
    },
    {
        id: 4,
        title: "yangi muftiy tayinlandi",
        img: require('../../images/woman.png'),
        date: new Date().getTime(),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eu ultrices ut scelerisque dolor fusce sed libero netus. Morbi tellus mi arcu pellentesque tincidunt massa faucibus. Pellentesque sagittis vestibulum, in vitae. Consectetur amet, aenean facilisis augue nunc, platea volutpat sit. Nibh vel risus senectus donec commodo turpis euismod erat suspendisse. Aenean convallis velit elit vestibulum ac a at. Aliquet tortor tincidunt bibendum auctor in velit vulputate. Lectus mi scelerisque porttitor in nec bibendum. Elit, hac in commodo ullamcorper. Etiam ac ultricies scelerisque rutrum vel ligula pharetra bibendum. Egestas non viverra odio nullam dui, enim, scelerisque at eget. Pellentesque turpis aliquam amet mattis gravida...'
    }
]

export default function (props) {
    return (<div className='woman-page'>
        <div className="container">
            <div className="title">Ayollar Sahifasi</div>
            <div className="articles">
                {datas.map(data=><Article data={data} woman={true} />)}
            </div>
        </div>
    </div>);
}
