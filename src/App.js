import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from './components/Product';
import Tile from './components/Tile';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import designers from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button turnedOff={false} buttonText={"to the collection"}/>
                <Button turnedOff={false} buttonText={"shop all bags"}/>
                <Button turnedOff={true} buttonText={"pre-orders"}/>
            </nav>
            <main>
                <Product
                    bagHighlight={"Best seller"}
                    bagPicture={bag1} bagPictureName={"bag1"}
                    bagText={"The handy bag"}
                    bagPrize={"€400,-"}
                />
                <Product
                    bagHighlight={"Best seller"}
                    bagPicture={bag2} bagPictureName={"bag2"}
                    bagText={"The stylish bag"}
                    bagPrize={"€250,-"}
                />
                <Product
                    bagHighlight={"New collection"}
                    bagPicture={bag3} bagPictureName={"bag3"}
                    bagText={"The simple bag"}
                    bagPrize={"€300,-"}
                />
                <Product
                    bagHighlight={"New collection"}
                    bagPicture={bag4} bagPictureName={"bag4"}
                    bagText={"The trendy bag"}
                    bagPrize={"€150,-"}
                />
            </main>
            <footer>
                <Tile textTitle={"THE BRAND"}
                      textPar1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae culpa dicta harum" +
                      " impedit quam quia quisquam saepe temporibus voluptatem."}
                      textPar2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae culpa dicta harum" +
                      " impedit quam quia quisquam saepe temporibus voluptatem."}
                      bigPicture=""
                      bigPictureName=""
                />
                <Tile textTitle="" textPar1="" textPar2=""
                      bigPicture={brand} bigPictureName={"brand"}
                />
                <Tile textTitle="" textPar1="" textPar2=""
                      bigPicture={designers} bigPictureName={"designers"}
                />
                <Tile textTitle={"OUR STORY"}
                      textPar1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat inventore ipsam" +
                      " porro, sit vitae voluptatum? Distinctio fugiat hic iste reprehenderit suscipit unde veniam."}
                      textPar2=""
                      bigPicture=""
                      bigPictureName=""
                />
            </footer>
        </>
    );
}

export default App;



