import { Absent } from '../interfaces'

/** Dummy user data. */
export const sampleAbsentData: Absent[] = [
    {
        id: 'ASD101',
        day: 'Monday',
        shifts: [
            { name: 'Shift Malam', startTime: 1635094800, endTime: 1635108300 },
            { name: 'Shift Pagi', startTime: 1635123600, endTime: 1635138000 },
            { name: 'Shift Siang', startTime: 1635145200, endTime: 1635156000 },
        ],
    },
    { id: 'ASD102', day: 'Tuesday', shifts: [] },
    { id: 'ASD103', day: 'Wednesday', shifts: [] },
    { id: 'ASD104', day: 'Thursday', shifts: [] },
    { id: 'ASD105', day: 'Friday', shifts: [] },
    { id: 'ASD106', day: 'Saturday', shifts: [] },
    { id: 'ASD107', day: 'Sunday', shifts: [] },
]

export const hoursData: string[] = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
]
