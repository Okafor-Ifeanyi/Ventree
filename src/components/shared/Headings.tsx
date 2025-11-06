import emoji from '../../assets/emoji.png'

type HeaderData = {
    title: string
    text: string
    icon?: boolean
}

const Headings = ({ title, text, icon }: HeaderData) => {
    return (
        <div>
            <h1 className={`text-[#0B0B0B] text-2xl lg:text-3xl `}>{title}</h1>
            <div className='flex items-center gap-2'>
                <p>{text}</p>
                {icon && <img src={emoji} className='w-6 h-6' alt='' />}
            </div>
        </div>
    )
}

export default Headings
