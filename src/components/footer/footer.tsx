import { GithubLogo } from '@phosphor-icons/react'
import { ReactNode } from 'react'

function Footer() {

    let data = new Date().getFullYear()


    let component: ReactNode

    component = (
        <div className="flex justify-center bg-[#003f5c] text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>
                    Pet Ride | Copyright: {data}
                </p>
                <p className='text-lg'>Acesse nosso GitHub</p>
                <div className='flex gap-2'>
                    <a href="https://github.com/meGustaRacalu" target="_blank">
                        <GithubLogo size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>

        )
    return (
        <>
            { component }
        </>
    )
}

export default Footer