import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {RotatingLines} from 'react-loader-spinner';
import {useSelector} from 'react-redux';
import {routes, authRoutes, privateRoutes} from './routes';

export default function AppRouter() {
	const { isAuth } = useSelector(state => state.user);

	return (
		<>
			<Suspense 
                fallback={<RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="55"
                    visible={true}
                />}
            >
                <Routes>
                	{routes.map(route => 
                		<Route 
                            key={route.path}
                			path={route.path}
                			element={route.component}
                		/>
                	)}

                	{!isAuth &&
                		authRoutes.map(route =>
                			<Route 
                                key={route.path}
                				path={route.path}
                				element={route.component}
                			/>
                		)
                	}
                </Routes>
            </Suspense>
		</>
	)
}