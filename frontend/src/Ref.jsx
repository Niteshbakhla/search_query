import React, { useEffect, useRef } from 'react'

const Ref = () => {
            const refs = useRef()
            useEffect(() => {
                        console.log(refs.current)
            }, [])
            return (
                        <>
                                    <div ref={refs}>Ref</div>
                                    <div ref={refs}>Ref</div>
                                    <div ref={refs}>Ref</div>
                                    <div ref={refs}>Hey</div>
                        </>
            )
}

export default Ref