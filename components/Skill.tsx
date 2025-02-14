import Image from 'next/image'
import React from 'react'

const Skill = () => {
    return (
        <div className="w-full">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
                <Image
                    src="https://avatars.githubusercontent.com/u/109269825?v=4"
                    alt="skill"
                    width={1000}
                    height={500}
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-light-accent dark:text-dark-accent text-center text-sm mt-1">stack name</p>
        </div>
    )
}

export default Skill