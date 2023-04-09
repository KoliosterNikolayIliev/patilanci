import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppProvider} from "./context/AppContext";
import CarouselComponent from "./components/CarouselComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Performances from "./components/Performances";
import Contacts from "./components/Conatcts";
import NoPage from "./components/NoPage";
import VideoGallery from "./components/VideoGallery";
import Live from "./components/Live";


function App() {
    return (
        <AppProvider>
            <BrowserRouter basename={''}>
                <div className="App">

                    <Header/>

                        <Routes>
                            <Route exact path="/" element={<CarouselComponent/>}/>
                            <Route exact path="/image-gallery" element={<ImageGallery/>}/>
                            <Route exact path="/video-gallery" element={<VideoGallery/>}/>
                            <Route exact path="/performances" element={<Performances/>}/>
                            <Route exact path="/contacts" element={<Contacts/>}/>
                            <Route exact path="/live" element={<Live/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Routes>

                    <Footer/>

                </div>

            </BrowserRouter>
        </AppProvider>

    );
}

export default App;
