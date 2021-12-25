import React from 'react'
import { Figure } from 'react-bootstrap'
import './styles.css'
import { useSelector } from 'react-redux'
import CountUp from 'react-countup'
const Header = () => {
    const data = useSelector(state => state.billgates.money)
    return (
        <>
            <Figure>
                <Figure.Image
                    className='m-2 circle'
                    alt="Bill Gates"
                    src="https://www.downloadclipart.net/large/bill-gates-png-image.png"
                />
                <Figure.Caption>
                    <b>Spend Bill Gates' Money</b>
                </Figure.Caption>
            </Figure>
            <div className='money container'>
                <p>
                    <CountUp
                    start={0}
                    end={data}
                    duration={1}
                    separator=","
                    decimals={4}
                    decimal=","
                    prefix="$ "
>               </CountUp>

            </p>
        </div>
        </>
    )
}

export default Header