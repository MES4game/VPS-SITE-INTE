import { FC, lazy, ReactNode, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GeneralVarsProvider } from '@/shared/contexts/common/GeneralVars';
import NavbarComp from '@/ui/components/navbar/NavbarComp';
import InfobarComp from '@/ui/components/infobar/InfobarComp';
import "@/App.css";

const LoadingComp:  FC = lazy(() => import('@/ui/components/common/LoadingComp'));
const HomePage:     FC = lazy(() => import('@/ui/pages/home/HomePage'));
const ActivityPage:    FC = lazy(() => import('@/ui/pages/activity/ActivityPage'));
const ChallengePage:    FC = lazy(() => import('@/ui/pages/challenge/ChallengePage'));
const ResultPage:    FC = lazy(() => import('@/ui/pages/result/ResultPage'));
const NotFoundPage: FC = lazy(() => import('@/ui/pages/NotFoundPage'));

const App: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: App");
    }, []);

    useEffect(() => {
        console.log("Rendered: App");
    });

    return (
        <GeneralVarsProvider>
            <NavbarComp />
            <main id='main'>
                <Suspense fallback={<LoadingComp />}>
                    <Routes>
                        <Route path='/' element={ <HomePage /> } />
                        <Route path='/activity' element={ <ActivityPage /> } />
                        <Route path='/challenge' element={ <ChallengePage /> } />
                        <Route path='/result' element={ <ResultPage /> } />
                        <Route path='*' element={ <NotFoundPage /> } />
                    </Routes>
                </Suspense>
            </main>
            <InfobarComp />
        </GeneralVarsProvider>
    );
}

export default App;
