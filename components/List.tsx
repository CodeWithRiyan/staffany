import * as React from 'react'
import { hoursData } from 'utils/sample-data'
import { Shift } from '../interfaces'
import _ from 'lodash'
import ListItem from './ListItem'

type Props = {
    absents?: Shift[]
}

const List = ({ absents }: Props) => {
    const groupedData = _.chain(absents)
        .groupBy('date')
        .map((value, key) => ({ date: key, shifts: value }))
        .value()

    return (
        <div className="contain">
            <figure className="bar-chart">
                <div className="row bars">
                    <div className="y-axis">
                        {hoursData.map((hour) => (
                            <div className="segment" key={hour}>
                                <span className="label">{hour}</span>
                            </div>
                        ))}
                    </div>
                    <div className="x-axis">
                        {groupedData.map((absent) => (
                            <div key={absent.date} className="year wrap">
                                <div className="col">
                                    <ListItem shifts={absent.shifts} />
                                </div>
                                <span className="label">{absent.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default List
