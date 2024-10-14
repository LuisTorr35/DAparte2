import './styles.css'
const Home = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-2'}></div>
                <div className={'col-sm-8'}>
                    <h1>Home</h1>
                    <div className={'image1'}>
                        <img src={'https://th.bing.com/th/id/OIP.wHtBaauGF7oNKGNVQXkYFgHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} className={'img-fluid'} alt={'imagen1'}/>
                    </div>
                </div>
                <div className={'col-sm-2'}></div>
            </div>
        </div>
    );
};
export default Home;
