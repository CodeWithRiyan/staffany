import * as React from 'react'
import ListItem from './ListItem'
import { Absent } from '../interfaces'

type Props = {
    items?: Absent[]
}

const List = ({ items }: Props) => (
    <div className="contain">
        <figure className="bar-chart">
            <div className="row bars">
                <div className="y-axis">
                    <div className="segment">
                        <span className="label">00:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">01:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">02:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">03:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">04:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">05:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">06:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">07:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">08:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">09:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">10:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">11:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">12:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">13:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">14:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">15:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">16:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">17:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">18:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">19:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">20:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">21:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">22:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">23:00</span>
                    </div>
                    <div className="segment">
                        <span className="label">24:00</span>
                    </div>
                </div>
                <div className="x-axis">
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '26%' }}
                            ></span>
                        </div>
                        <span className="label">Monday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col"></div>
                        <span className="label">Sunday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span className="bar" style={{ height: '26%' }}>
                                <button></button>
                            </span>
                        </div>
                        <span className="label">Sunday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span className="bar" style={{ height: '26%' }}>
                                <button></button>
                            </span>
                        </div>
                        <span className="label">Sunday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span className="bar" style={{ height: '26%' }}>
                                <button></button>
                            </span>
                        </div>
                        <span className="label">Sunday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span className="bar" style={{ height: '26%' }}>
                                <button></button>
                            </span>
                        </div>
                        <span className="label">Sunday</span>
                    </div>
                    <div className="year wrap">
                        <div className="col">
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span
                                className="bar"
                                style={{ height: '35%' }}
                            ></span>
                            <span className="bar" style={{ height: '26%' }}>
                                <button></button>
                            </span>
                        </div>
                        <span className="label">Sunday</span>
                    </div>
                </div>
            </div>
        </figure>
    </div>
)

export default List
