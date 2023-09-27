import { Suspense, lazy, ElementType,SuspenseProps } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

// loading screen

const Loadable = (Component: ElementType) => (props: SuspenseProps) =>
(
    <Suspense fallback={<LoadingSpinner/>}>
        <Component {...props} />
    </Suspense>
);

export const Admin = Loadable(
    lazy(()=>import('../pages/home'))
);
