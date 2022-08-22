import React, { useState } from 'react'
import { createActor } from '../../api/actor'
import { useNotification } from '../../hooks'
import { commonModalTitleClasses } from '../../utils/theme'
import ActorForm from '../form/ActorForm'
import Modal from '../modals/Modal'

export default function ActorUpload({ onClose }) {

    const { updateNotification } = useNotification()
    const [busy, setBusy] = useState(false)
    const handleSubmit = async (data) => {
        setBusy(true)
        const { error, actor } = await createActor(data)
        setBusy(false)
        if (error) return updateNotification('error', error)

        console.log(actor)

        updateNotification('success', 'Actor created successfully!')
        onClose()
    }
    return (
        <Modal onClose={onClose} style=" top-[25vh]" title='Actor Form'>
            <div className='w-full p-5'>
                < ActorForm busy={busy} onSubmit={!busy ? handleSubmit : null
                } title={"Create New Actor"} btnTitle={"Create"} />
            </div>
        </Modal >
    )
}
