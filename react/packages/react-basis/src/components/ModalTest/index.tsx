
import { Modal } from '@handle-react/components'
import React, { useState } from 'react'

export default function ModalTest() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3159856553,1527464792&fm=27&gp=0.jpg"
                alt="" />
            {showModal ? (
                <Modal onClose={() => setShowModal(false)}>
                    <div
                        style={{//测试事件冒泡的div
                            background: "#fff",
                        }}
                    >
                        <h1>asdfasfasfasfasdfasdf</h1>
                        <button onClick={() => setShowModal(false)}>关闭朦层</button>
                    </div>
                </Modal>
            ) : null}
            <button onClick={() => setShowModal(true)}>显示朦层</button>
        </div>
    )
}
