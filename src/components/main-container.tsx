import React, { Suspense } from 'react'
import DrawerComponent from "./drawer.tsx"
import s from "./main-container.module.scss"
import Player from "./player.tsx"
import logo from '../img/logo.png'
import { Navigate, Route, Routes } from 'react-router-dom'
const Tracks = React.lazy(() => import('./tracks/page.tsx'))
const Main = React.lazy(() => import('./main/page.tsx'))
const Track = React.lazy(() => import('./tracks/id/page.tsx'))
const Create = React.lazy(() => import('./tracks/create/page.tsx'))
const CreateAlbum = React.lazy(() => import('./albums/create/page.tsx'))
const Albums = React.lazy(() => import('./albums/page.tsx'))
const AlbumTracks = React.lazy(() => import('./albums/id/page.tsx'))
const MainContainer = ({ children }: any) => {
    return (
        <div className={s.newAmsterdamRegular}>
            <div className={s.navbar} style={{
                display: 'flex'
            }}>
                <DrawerComponent />
                <div style={{ margin: '0 auto', fontSize: '24px', color: "violet", display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '80px', height: '80px' }} src={logo} alt="logo" />
                    <p>MUSICSERVER</p>
                    <img style={{ width: '80px', height: '80px' }} src={logo} alt="logo" />
                </div>
            </div>
            <div className={s.container}>
                <Suspense>
                    <Routes>
                        <Route path='/' element={<Navigate to='/MusicServer/main' />} />
                        <Route path='/MusicServer' element={<Navigate to='/MusicServer/main' />} />
                        <Route path='/MusicServer/tracks/:id' element={<Track />} />
                        <Route path='/MusicServer/main' element={<Main />} />
                        <Route path='/MusicServer/tracks' element={<Tracks />} />
                        <Route path='/MusicServer/create' element={<Create />} />
                        <Route path='/MusicServer/albums/create' element={<CreateAlbum />} />
                        <Route path='/MusicServer/albums/:id' element={<AlbumTracks />} />
                        <Route path='/MusicServer/albums' element={<Albums />} />
                        <Route path='*' element={'<ErrorPage />'} />
                    </Routes>
                </Suspense>
            </div>
            <Player />
        </div>
    )
}
export default MainContainer