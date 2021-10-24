import * as React from 'react'
import { hoursData } from 'utils/sample-data'
import { Absent } from '../interfaces'
import ListItem from './ListItem'

type Props = {
    absents?: Absent[]
}

const List = ({ absents }: Props) => (
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
                    {absents.map((absent) => (
                        <div key={absent.id} className="year wrap">
                            <div className="col">
                                <ListItem shifts={absent.shifts} />
                            </div>
                            <span className="label">{absent.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </figure>
    </div>
)

export default List
