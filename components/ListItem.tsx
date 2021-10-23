import React from 'react'
import Link from 'next/link'

import { Absent } from '../interfaces'

type Props = {
    data: Absent
}

const ListItem = ({ data }: Props) => (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
        <a>
            {data.id}: {data.day}
        </a>
    </Link>
)

export default ListItem
