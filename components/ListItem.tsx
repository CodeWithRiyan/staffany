import React from 'react'
import Link from 'next/link'

import { Shift } from '../interfaces'

type Props = {
    shifts: Shift[] | []
}

const ListItem = ({ shifts }: Props) => {
    let dataList = []
    const fixShifts = shifts.reverse().forEach((shift, index) => {
        const endTime = new Date(shift.endTime * 1000)
    })

    return (
        <>
            {shifts.map((shift) => {
                return (
                    <>
                        <span
                            key={shift.name}
                            className="bar"
                            style={{ height: '20%' }}
                        >
                            {shift.name}
                        </span>

                        <span
                            className="bar"
                            style={{ height: '12%', background: 'transparent' }}
                        ></span>
                    </>
                )
            })}
        </>
    )
}

export default ListItem
