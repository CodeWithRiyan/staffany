import React from 'react'
import Button from 'components/Button'

const Modal = () => {
    const [showModal, setshowModal] = React.useState(false)

    return (
        <>
            <Button variant="primary" onClick={() => setshowModal(!showModal)}>
                Check
            </Button>
            <div className={`${showModal ? 'modal-open' : 'modal'}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span
                            className="close"
                            onClick={() => setshowModal(false)}
                        >
                            &times;
                        </span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <form className="form-label form-css-label">
                            <fieldset>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                />
                                <label htmlFor="firstName">First Name</label>
                            </fieldset>
                            <fieldset>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                />
                                <label htmlFor="lastName">Last Name</label>
                            </fieldset>
                            <fieldset>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                />
                                <label htmlFor="email">Email Address</label>
                            </fieldset>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
