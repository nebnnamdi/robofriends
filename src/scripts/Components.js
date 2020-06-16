import React from 'react';
import '../style/scroll.css';

export const Card =({name, email, id, phone})=> {
    return(
        <div className='tc bg-dark-green c1 pa1 ma1 br2 light-gray grow shadow-5 dib'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='' />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export const CardList =({robots})=> {
    return(
        <div>
            {
                robots.map(robot=>{
                    return(
                        <Card key={robot.id}
                        name={robot.name}
                        email={robot.email}
                        phone={robot.phone}
                        id={robot.id}
        />
                    )
                })
            }
        </div>
    )
}

export const SearchField =({search})=> {
    return(
        <input type='search'
        className='pa2 bg-lightest-blue ba br1 b--green ma1'
        placeholder='Search'
        onChange={search}
        />
    )
}

export const Scroll =(props)=> {
    return(
        <div className='scroll'>
            {props.children}
        </div>
    )
}

export const SearchType =({select})=> {
    return(
        <select onChange={select} 
        className='pa1 br1 ba' type='text'>
            <option value='select'>Select</option>
            <option value='name'>Name</option>
            <option value='email'>Email</option>
        </select>
    )
}