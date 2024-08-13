import React, { Suspense } from 'react'
import DrawerComponent from "./drawer.tsx"
import s from "./main-container.module.scss"
import Player from "./player.tsx"
import { Navigate, Route, Routes } from 'react-router-dom'
const Tracks = React.lazy(() => import('./tracks/page.tsx'))
const Main = React.lazy(() => import('./main/page.tsx'))
const Track = React.lazy(() => import('./tracks/id/page.tsx'))
const Create = React.lazy(() => import('./tracks/create/page.tsx'))
const Albums = React.lazy(() => import('./albums/page.tsx'))
const MainContainer = ({ children }: any) => {

    return (
        <div className='layout'>
            <div className={s.navbar}>
                <DrawerComponent />
            </div>
            <div className={s.container}>
                <Suspense>
                    <Routes>
                        <Route path='/MusicServer' element={<Navigate to='/MusicServer/main' />} />
                        <Route path='/MusicServer/tracks/:id' element={<Track />} />
                        <Route path='/MusicServer/main' element={<Main />} />
                        <Route path='/MusicServer/tracks' element={<Tracks />} />
                        <Route path='/MusicServer/create' element={<Create />} />
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