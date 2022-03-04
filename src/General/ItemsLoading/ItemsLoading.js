const ItemsLoading = ({pageName}) => {
    const loop = [1,2,3,4,5,6,7,8, 9, 10, 11, 12]
    return(
        <>
        {
            loop?.map(i => (
                pageName === 'homeMeal' ? 
                <div key={i} className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                    <div className="product">
                        <div className="loading image1"></div>
                        <span className="loading item-1"></span>
                    </div>
                </div>
                : 
                <div key={i} className='col-xs-12 col-md-6 col-lg-4'>
                    <div className="product">
                        <div className="loading image1"></div>
                        <span className="loading item-1"></span>
                    </div>
                </div>
            ))
        }
        </>
    )
}
export default ItemsLoading