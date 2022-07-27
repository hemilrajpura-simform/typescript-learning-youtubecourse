import React from 'react'
import {IState as IProps} from "../App"

// interface IProps {
//     people: {
//         name: string,
//         age: number,
//         img: string,
//         note?: string
//     }[]
// }


const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(item => {
            return (
                <li className='List' key={item.name}>
                    <div className='List-header'>
                        <img src={item.img} alt={item.name} className='List-img' />
                        <h2 className='List-h2'>{item.name} </h2>
                    </div>
                    <p className=''>{item.age} years old</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List