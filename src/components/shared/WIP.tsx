import underConstruction from '../../assets/under-construction.jpg'

const WIP = () => {
    return (
        <div className='w-full h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
            <img src={underConstruction} alt='' className='lg:h-[500px]' />
            <p className='text-lg text-[#979DA0] font-semibold'>Coming Soon!</p>
            <p className='text-lg text-[#979DA0] font-semibold'>Please check back later</p>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default WIP
