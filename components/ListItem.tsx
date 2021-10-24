import React from 'react'
import Link from 'next/link'

import { Shift } from '../interfaces'

type Props = {
    shifts: Shift[] | []
}

const ListItem = ({ shifts }: Props) => {
    const convertToHeight = (data: string) => {
        const splitData = data.split(':')
        const hourData = splitData[0]
        const minuteData = splitData[1]
        const fixHour = parseInt(hourData)
        const fixMinute = parseInt(minuteData) / 60
        const fixTotal = fixHour + fixMinute

        return fixTotal
    }
    const reverseShifts = shifts.reverse()
    let dataList = []
    reverseShifts.forEach((shift, index) => {
        if (index === 0 && shift.endTime !== '24:00') {
            const heightEndTime = convertToHeight(shift.endTime) * 4
            const height24 = convertToHeight('24:00') * 4
            const height = height24 - heightEndTime
            const data = { isSeparator: true, height }
            dataList.push(data)
        }
        const heightEndTime = convertToHeight(shift.endTime) * 4
        const heightStartTime = convertToHeight(shift.startTime) * 4
        const height = heightEndTime - heightStartTime

        dataList.push({ ...shift, isSeparator: false, height })
        if (index === shifts.length - 1 && shift.startTime !== '00:00') {
            const heightStartTime = convertToHeight(shift.startTime) * 4
            const height00 = convertToHeight('00:00') * 4
            const height = heightStartTime - height00
            const data = { isSeparator: true, height }
            dataList.push(data)
        }
        if (shifts.length > 1 && index !== shifts.length - 1) {
            const heightStartTime =
                convertToHeight(reverseShifts[index].startTime) * 4
            const heightEndTime =
                convertToHeight(reverseShifts[index + 1].endTime) * 4
            const height = heightStartTime - heightEndTime

            const data = { isSeparator: true, height }
            dataList.push(data)
        }
    })
    console.log(dataList)

    return (
        <>
            {dataList.map((shift) => {
                return (
                    <>
                        {shift.isSeparator && (
                            <span
                                className="bar"
                                style={{
                                    height: `${shift.height}%`,
                                    background: 'transparent',
                                }}
                            ></span>
                        )}
                        {!shift.isSeparator && (
                            <span
                                className="bar"
                                style={{
                                    height: `${shift.height}%`,
                                }}
                            ></span>
                        )}
                    </>
                )
            })}
        </>
    )
}

export default ListItem
