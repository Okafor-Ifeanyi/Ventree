const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center min-h-[80vh] w-full  bg-white top-0 left-0'>
            <div className='lds-spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner

export const ChartLoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center h-[400px] w-full  bg-white top-0 left-0'>
            <div className='lds-spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
