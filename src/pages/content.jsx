import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Content = ({ showOrder, setShowOrder }) => {
    Content.propTypes = {
        showOrder: PropTypes.bool.isRequired,
        setShowOrder: PropTypes.bool.isRequired,
    };
    
    return(
        <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
            <div className="lg:col-span-6 md:p-8">
                <header>
                    {/* title y search  */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-2xl text-white">Ordenes</h1>
                            <p className="text-gray-300">05 de Abril 2024</p>
                        </div>
                    <div className=''>
                        <div className="w-full relative">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                            search
                        </span>
                            <input type="text" 
                            placeholder='search'
                            className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" />
                        </div>
                    </div>
                    </div>
                    {/* tabs  */}
                        <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
                            <Link to="/" className='py-2 pr-4 relative hover:before:w-1/2 hover:text-[#ec7c6a] before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'>HOT FISHE</Link>
                            <Link to="/" className='py-2 pr-4 relative hover:before:w-1/2 hover:text-[#ec7c6a] before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'>SOUP</Link>
                            <Link to="/" className='py-2 pr-4 relative hover:before:w-1/2 hover:text-[#ec7c6a] before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'>DISHES</Link>
                            <Link to="/" className='py-2 relative hover:before:w-1/2 hover:text-[#ec7c6a] before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'>GRILL</Link>
                        </nav>
                </header>
                {/* title  */}
                    <div className='flex items-center justify-between mb-16'>
                        <h2 className='text-white text-xl'>Choose Dishes</h2>
                            <button className='text-gray-300 flex items-center gap-4 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
                                Dine in
                            <span className="material-icons">
                                expand_more
                            </span>
                        </button>
                    </div>
                    {/* content cards  */}
                    <div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6'>
                        {/* card  */}
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida2.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida2.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
                            <img src="/comida2.png" alt=""  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
                            <p className='text-xl'>ALMUERZO CASERO</p>
                            <span className='text-gray-400'>$15.000</span>
                            <p className='text-gray-600'>20 Unidades Disponibles</p>
                        </div>
                    </div>
            </div>
            <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
                <div className='relative pt-16 text-gray-300 p-8 h-full'>
                    <span 
                    onClick={() => setShowOrder(false)}
                    className="material-icons lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl">
                        cancel
                    </span>
                    <h1 className='text-2xl mt-4'>Orden #874455</h1>
                    {/* botones orders  */}
                    <div className='flex items-center gap-4 flex-wrap mb-8'>
                        <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                            Dine in
                        </button>
                        <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                            To Go
                        </button>
                        <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                            Delivery
                        </button>
                    </div>
                    {/* tabs order  */}
                    <div>
                        <div className='grid grid-cols-6 mb-4 p-4'>
                            <h5 className='col-span-4'>Producto</h5>
                            <h5>Cant</h5>
                            <h5>Precio</h5>
                        </div>
                    </div>
                    {/* products  */}
                    <div className='h-[400px] overflow-scroll'>
                        {/* product */}
                        <div className='bg-[#262837] p-5 rounded-xl mb-4'>
                        <div className='grid grid-cols-6 mb-2'>
                            {/* product description  */}
                            <div className='col-span-4 flex items-center gap-3'>
                                <img src="comida.png" alt="" className='w-10 h-10 object-cover'/>
                                <div>
                                    <h5 className='text-sm'>g</h5>
                                    <p className='text-xs text-gray-400'>$15.000</p>
                                </div>
                            </div>
                            {/* cant  */}
                            <div>
                                <span>2</span>
                            </div>
                            {/* price  */}
                            <div>
                                <span>$30.000</span>
                            </div>
                        </div>
                        {/* note  */}
                        <div className='grid grid-cols-8 items-center'>
                            <form className='col-span-6'>
                                <input type="text" 
                                className='bg-[#1F1D28] py-2 px-4 rounded-lg outline-none'
                                placeholder='Nota...'/>
                            </form>
                            <div className='col-span-2 text-center '>
                                <button className='border border-red-500 items-center rounded-lg '>
                                <span className="material-icons flex p-1 text-red-500">
                                    delete
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* product */}
                    <div className='bg-[#262837] p-5 rounded-xl mb-4'>
                        <div className='grid grid-cols-6 mb-2'>
                            {/* product description  */}
                            <div className='col-span-4 flex items-center gap-3'>
                                <img src="comida.png" alt="" className='w-10 h-10 object-cover'/>
                                <div>
                                    <h5 className='text-sm'>g</h5>
                                    <p className='text-xs text-gray-400'>$15.000</p>
                                </div>
                            </div>
                            {/* cant  */}
                            <div>
                                <span>2</span>
                            </div>
                            {/* price  */}
                            <div>
                                <span>$30.000</span>
                            </div>
                        </div>
                        {/* note  */}
                        <div className='grid grid-cols-8 items-center'>
                            <form className='col-span-6'>
                                <input type="text" 
                                className='bg-[#1F1D28] py-2 px-4 rounded-lg outline-none'
                                placeholder='Nota...'/>
                            </form>
                            <div className='col-span-2 text-center '>
                                <button className='border border-red-500 items-center rounded-lg '>
                                <span className="material-icons flex p-1 text-red-500">
                                    delete
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* product */}
                    <div className='bg-[#262837] p-5 rounded-xl mb-4'>
                        <div className='grid grid-cols-6 mb-2'>
                            {/* product description  */}
                            <div className='col-span-4 flex items-center gap-3'>
                                <img src="comida2.png" alt="" className='w-10 h-10 object-cover'/>
                                <div>
                                    <h5 className='text-sm'>g</h5>
                                    <p className='text-xs text-gray-400'>$15.000</p>
                                </div>
                            </div>
                            {/* cant  */}
                            <div>
                                <span>2</span>
                            </div>
                            {/* price  */}
                            <div>
                                <span>$30.000</span>
                            </div>
                        </div>
                        {/* note  */}
                        <div className='grid grid-cols-8 items-center'>
                            <form className='col-span-6'>
                                <input type="text" 
                                className='bg-[#1F1D28] py-2 px-4 rounded-lg outline-none'
                                placeholder='Nota...'/>
                            </form>
                            <div className='col-span-2 text-center '>
                                <button className='border border-red-500 items-center rounded-lg '>
                                <span className="material-icons flex p-1 text-red-500">
                                    delete
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* product */}
                    <div className='bg-[#262837] p-5 rounded-xl mb-4'>
                        <div className='grid grid-cols-6 mb-2'>
                            {/* product description  */}
                            <div className='col-span-4 flex items-center gap-3'>
                                <img src="comida.png" alt="" className='w-10 h-10 object-cover'/>
                                <div>
                                    <h5 className='text-sm'>g</h5>
                                    <p className='text-xs text-gray-400'>$15.000</p>
                                </div>
                            </div>
                            {/* cant  */}
                            <div>
                                <span>2</span>
                            </div>
                            {/* price  */}
                            <div>
                                <span>$30.000</span>
                            </div>
                        </div>
                        {/* note  */}
                        <div className='grid grid-cols-8 items-center'>
                            <form className='col-span-6'>
                                <input type="text" 
                                className='bg-[#1F1D28] py-2 px-4 rounded-lg outline-none'
                                placeholder='Nota...'/>
                            </form>
                            <div className='col-span-2 text-center '>
                                <button className='border border-red-500 items-center rounded-lg '>
                                <span className="material-icons flex p-1 text-red-500">
                                    delete
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* product */}
                    <div className='bg-[#262837] p-5 rounded-xl mb-4'>
                        <div className='grid grid-cols-6 mb-2'>
                            {/* product description  */}
                            <div className='col-span-4 flex items-center gap-3'>
                                <img src="comida.png" alt="" className='w-10 h-10 object-cover'/>
                                <div>
                                    <h5 className='text-sm'>g</h5>
                                    <p className='text-xs text-gray-400'>$15.000</p>
                                </div>
                            </div>
                            {/* cant  */}
                            <div>
                                <span>2</span>
                            </div>
                            {/* price  */}
                            <div>
                                <span>$30.000</span>
                            </div>
                        </div>
                        {/* note  */}
                        <div className='grid grid-cols-8 items-center'>
                            <form className='col-span-6'>
                                <input type="text" 
                                className='bg-[#1F1D28] py-2 px-4 rounded-lg outline-none'
                                placeholder='Nota...'/>
                            </form>
                            <div className='col-span-2 text-center '>
                                <button className='border border-red-500 items-center rounded-lg '>
                                <span className="material-icons flex p-1 text-red-500">
                                    delete
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                  


                {/* submit  */}
                <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-gray-400'>Descuento</span>
                        <span>$0</span>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-gray-400'>Subtotal</span>
                        <span>$30.000</span>
                    </div>
                    <div className=''>
                        <button className='bg-[#ec7c6a] w-full text-white rounded-lg p-2'>Continuar Compra</button>
                    </div>
                </div>

                </div>
            </div>
        </main>
    );
}

export default Content