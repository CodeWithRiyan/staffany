import Layout from 'components/Layout'
import List from 'components/List'
import Modal from 'components/Modal'
import { Absent } from 'interfaces'
import { NextPageContext } from 'next'
const host = !!process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

export async function getServerSideProps(context: NextPageContext) {
    const { id, start, coupon } = context.query
    const absentsResult = await fetch(`${host}/api/absents`)
    const absents = await absentsResult.json()
    return {
        props: {
            absents,
        }, // will be passed to the page component as props
    }
}
type Props = {
    absents?: Absent[]
}

const IndexPage = ({ absents }: Props) => {
    return (
        <Layout title="StaffAny Assesment">
            <h1>StaffAny Assessment</h1>
            <Modal />
            <List absents={absents} />
        </Layout>
    )
}

export default IndexPage
