import { NextApiRequest, NextApiResponse } from 'next'
import { getAllData } from 'utils/absent'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await getAllData()
        let resData = []
        data.forEach((doc) => {
            resData.push({ ...doc.data(), id: doc.id })
        })

        res.status(200).json(resData)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
